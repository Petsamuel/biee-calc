
</div> 

<h1 align="center">FrontendChallenge</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/{{Petsamuel}}/frontendchallenge?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/{{Petsamuel}}/frontendchallenge?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/{{Petsamuel}}/frontendchallenge?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/{{Petsamuel}}/frontendchallenge?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/{{Petsamuel}}/frontendchallenge?color=56BEB8" />

<img alt="Github forks" src="https://img.shields.io/github/forks/{{Petsamuel}}/frontendchallenge?color=56BEB8" /> 

 <img alt="Github stars" src="https://img.shields.io/github/stars/{{Petsamuel}}/frontendchallenge?color=56BEB8" />
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  FrontendChallenge 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/{{Petsamuel}}" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Basic Js calculator with Ui, Challenge by Frontend Mentor

## :sparkles: Features ##

:heavy_check_mark: Themes;\
:heavy_check_mark: Calculates;\
:heavy_check_mark: Responsive;

## :rocket: Technologies ##

The following tools were used in this project:

- [html](https://google.com/html/)
- [javaScript](https://google.com/javascript/)
- [CSS](https://google.com/css)



## :checkered_flag: Starting ##

```javascript
//the logic behind the calculations
try {

    var numbers = (props) => {
        userInt.value += (props);
    }
    var operators = (params) => {
        userInt.value += (params);
    }

    DEL.addEventListener('click', () => {
        result = (userInt.value);
        len = result.length;
        deleteNum = result.substring(0, len - 1)
        userInt.value = deleteNum
    })

    submit.addEventListener('click', () => {
        result = eval(userInt.value);
        console.log(result);

        userInt.value = result;

    })


} catch (error) {
    console.log(`oops internal server error`, error);
}

```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/{{Petsamuel}}" target="_blank">PETER SAMUEL</a>

&#xa0;

<a href="#top">Back to top</a>
