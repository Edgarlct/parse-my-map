# Parser MAP

----

## The story of the project 

Romain one guy of the team do a lot of tracking. He wanted to get the map with the gpx with an easy way to use.
Because on the other they give you only the gpx file and you need to use a lot of tools to get the map and the data. ❗

So they decided to create a parser to get the map and the data in one file.

## Types of files 

- what is a gpx file ?

GPX, or GPS Exchange Format, is an XML schema designed as a common GPS data format for software applications. It can be used to describe waypoints, tracks, and routes.

- what is a txt file ?

A text file is a computer file that only contains text and has no special formatting such as bold text, italic text, images, etc. With Microsoft Windows computers text files are identified with the .txt file extension, as shown in the example picture.

- what is a xtml file ?

XTML is a file extension for an XML document used with Microsoft InfoPath. XTML stands for XML Template. XTML files contain XML data that can be used to create forms for collecting and sharing data. XTML files can be opened and edited by Microsoft InfoPath.



## library used 📚

- [papaparse](https://www.papaparse.com/) : to parse the txt file
- [leaflet](https://leafletjs.com/) : to display the map
- [lit-html](https://lit-html.polymer-project.org/) : to display the data
- [jest](https://jestjs.io/) : to test the project
- [eslint](https://eslint.org/) : to lint the code
- [webpack](https://webpack.js.org/) : to bundle the code



 >## Architecture of the project 🏠
> - dist : the folder where the bundle is
> - Doc : the folder where the documentation is
>   - src : the folder where the code is
>   Files : the folder where the files are .txt / .gpx 
>   - tools : the folder where the tools we made are
>     - Parser : the code of the function to parse the file
>     - leafletPrepare : the code of the function to display the map
> - Test : the folder where the test is
> - node_modules : the folder where the modules are
> - .gitignore : the file to ignore the files
> - LICENSE : the file to know the license
> - package.json : the file to know the dependencies
> - README.md : the file to know the project
> - tsconfig.json : the file to know the configuration of the typescript


### how it works ? 🤔

You need to have a gpx files or a txt file or XMTL structure . You just put inside the input and click on the button. And you will get a preview of the map and the data on the map.


### how to install ? 📥

To install the parser, run the following command:

``npm install parse-my-map``
or
``yarn install parse-my-map``

#### To get more info about the installation and the use of the parser go to the [readme](../readme.md)







