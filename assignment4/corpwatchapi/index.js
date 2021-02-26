console.log("Corpwatchmodule loaded")

const fetch = require('node-fetch');

class corpwatch {
    key
    constructor(key) {
        this.key = key;
        console.log(`Setting Corpwatch key: ${key}`)
    }

  companyListingByName(name,callback) {
        name = name.toLowerCase()
        name = name.replace(/ /g, "+")
        let data = fetch(`http://api.corpwatch.org/companies.json?company_name=${name}&key=${this.key}`).then(res=>res.json()).then(json=>{
            callback(json)
        }).catch(err=>{
            console.log(err);
        })
    }

    companyListingByCik(cik,callback) {
        fetch(`http://api.corpwatch.org/companies?cik=${cik}&key=${this.key}`)
            .then(res => res.json())
            .then(json => callback(json));
    }

    companyFilings(year,cwid,callback){
        fetch(`http://api.corpwatch.org/${year}/companies/${cwid}/filings.json?key=${this.key}`)
        .then(res => res.json())
        .then(json => callback(json));
    }

    companyInfoByCwid(cwid,callback){
            fetch(`http://api.corpwatch.org/companies/${cwid}.json?key=${this.key}`)
            .then(res => res.json())
            .then(json => callback(json));
    }
}

// module.exports = {corpwatch}

let c = new corpwatch("")
c.companyListingByName('',function(val){
    console.log(val)
})


