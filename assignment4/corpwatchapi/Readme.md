# Corpwatch Api

Using this api you can pull the year wise filing for 10-k, get company info based on central index key or corpwatch index key.

## Getting started

### Key:-
Key is not compulasary to run this application although if you get a key you can query lot more requests from corpwatch servers.
http://api.corpwatch.org/register.php

### Request Response
All requests to api are done through call back functions and response is a json object.

## Using the application

### Instanciate the corp watch object using key
```
var cwatch = require("@harshnagarkar/corpwatch-package")

let cwatch = new cwatch.corpwatch("Serial key")
```
Note:- Serial Key can be left blank with an empty string.

### Getting Company listing by name
```
cwatch.companyListingByName('starbucks corp',function(val){
    console.log(val)
})
```

### Getting Company listing by corpwatch database id
```
cwatch.companyInfoByCwid('cw_6151',function(val){
    console.log(val)
})
```
You can intially find it using by compantListingByName method

### Getting Company listing by central index key
```
cwatch.companyListingByCik('829224',function(val){
    console.log(val)
})
```
You can initially find it using by central index key.
YOu will need cik as a parameter.

### Getting company's latest fillings 
```
cwatch.companyFilings(2008,'cw_6151',function(val){
    console.log(val)
})
```
You can initially find the corpwatch id using the companyListingByName method.
You will also see years of data available in the method's response.
Hence can shall be able to find the filling of that company for that year, which includes 10-k and sec_21 txt and url respectively.
