// canvas initialization

 var canvas = document.getElementById('canvas');
//
// var ctx = canvas.getContext("2d");

var svgForm = document.querySelector('.svg-form');

//svgForm = createSVGform();

// screen type buttons
var squareCanvas = document.getElementById('square');
var horizontalCanvas = document.getElementById('horizontal');
var verticalCanvas = document.getElementById('vertical');

//color menu initialization
var toolbarColor = document.getElementById("toolbar-color");

//textareas initialization



//editing toolbar initialization

let toolbarText;

//text adding
var mainTextButton = document.getElementById("main-text-button");

var headlineTextButton = document.getElementById("headline-text-button");



// created text initialization


// canvas text initialization
var textEditable = document.getElementsByClassName("text-editable");

//var mainTextEditable = document.getElementById("main-text");

//var headlineTextEditable = document.getElementById("headline-text");


svgForm.addEventListener("click", function() {

  toolbarColor.style.opacity = "1";

});



function setPositionX(element, positionX) {


    switch (positionX) {

      case 'center':
        element.setAttribute('x', '300');
        break;

      case 'left':
        element.setAttribute('x', '10');
        break;

      case 'right':
        element.setAttribute('x', '600');
        break;

    }

  }

  function setPositionY(element, positionY) {

    switch (positionY) {

      case 'top':
        element.setAttribute('y', '10');
        break;

      case 'middle':
        element.setAttribute('y', '150');
        break;

      case 'bottom':
        element.setAttribute('y', '230');
        break;

    }

}

function getPositionX(element) {

      return element.getAttribute('x');

}


var headlineTextClicked = function(event) {

  var headlineTextInit = event.target;

  headlineToolbarAppear(headlineTextInit);

 };

 var mainTextClicked = function(event) {

   var mainTextInit = event.target;

   mainTextToolbarAppear(mainTextInit);

  };

var headlineToolbarAppear = function(headlineTextInit) {

  toolbarText = document.getElementById("toolbar-text");


  if (toolbarText.classList.contains("toolbar-text--maintext"))

    toolbarText.classList.remove("toolbar-text--maintext");

  console.log ("H.text");

  toolbarText.classList.add("toolbar-text--headline");

//textPositioning();
};

var mainTextToolbarAppear = function (mainTextInit) {

  toolbarText = document.getElementById("toolbar-text");

  if (toolbarText.classList.contains("toolbar-text--headline"))

  toolbarText.classList.remove("toolbar-text--headline");

  console.log("main text");

  toolbarText.classList.add("toolbar-text--maintext");

  //textPositioning();

}

function MainTextInit(text, svgElem) {

 setPositionX(svgElem,'center');
 setPositionY(svgElem,'bottom');

 text.innerHTML = "Main text";
 text.addEventListener('click', mainTextClicked, false);

}

function HeadlineTextInit(text, svgElem) {

 setPositionX(svgElem,'center' );
 setPositionY(svgElem, 'top');

 text.innerHTML = "Headline";
 text.addEventListener('click', headlineTextClicked, false);
}

function TextAppend(textType) {

    var TextInSVG = document.createElementNS('http://www.w3.org/2000/svg',"foreignObject");

    var TextEditable = document.createElement("h3");

    TextEditable.className = "text-editable";

    svgForm.appendChild(TextInSVG);

    svgForm.classList.add ("svg-with-text");

    TextInSVG.appendChild(TextEditable);

    console.log(TextInSVG);

     if (textType == "main text") {
       TextInSVG.id = "main-text";
       MainTextInit(TextEditable, TextInSVG);

     }

        else if (textType == "headline text") {
          TextInSVG.id = "headline-text";
          HeadlineTextInit(TextEditable,TextInSVG);

        }

}


mainTextButton.addEventListener("click", function() { TextAppend('main text') });

headlineTextButton.addEventListener("click", function() { TextAppend('headline text') });

function textEditing() {

  document.querySelector(".text-resize").addEventListener("click", function() {
      console.log("resize");

      if (toolbarText.classList.contains('toolbar-text--headline')) {
        headlineText.style.fontSize = "150%";
      }

      else if (toolbarText.classList.contains('toolbar-text--maintext')) {

        mainText.style.fontSize = "150%";

      }

      // добавить изменение цвета текста
  });
}


  var headlineText = document.getElementById("headline-text"),
      mainText = document.getElementById("main-text");

      /*function toolbarPosition(textType, position) {

            if (svgForm.classList.contains(document.querySelectorAll(".text-editable"))) {

              switch (position) {

                  case 'center' :

                    //console.log('center');
                    setPositionX(textType, 'center');
                    //setPositionX(toolbarText, 'center');
                    break;

                  case 'right' :

                  setPositionX(textType, 'right');
                  //setPositionX(toolbarText, 'right');
                  break;


                  case 'left' :

                  setPositionX(textType, 'left');
                  //setPositionX(toolbarText, 'left');
                  break;

     }

   }

 }*/

    document.getElementById("align-center").addEventListener("click", function() {

          if (svgForm.classList.contains("svg-with-text"))
          {
            console.log('center');
            if (toolbarText.classList.contains('toolbar-text--headline'))
            {
              setPositionX(headlineText, 'center');
              setPositionX(toolbarText, 'center');

            }
            if (toolbarText.classList.contains('toolbar-text--maintext'))
            {
              setPositionX(mainText, 'center');
              setPositionX(toolbarText, 'center');
            }

          }

    });

    document.getElementById("align-left").addEventListener("click", function() {

      if (svgForm.classList.contains("svg-with-text"))
      {
          if (toolbarText.classList.contains('toolbar-text--headline'))
          {
            setPositionX(headlineText, 'left');
            setPositionX(toolbarText, 'left');
          }
          if (toolbarText.classList.contains('toolbar-text--maintext'))
          {
            setPositionX(headlineText, 'left');
            setPositionX(toolbarText, 'left');
          }

          }


    });

    document.getElementById("align-right").addEventListener("click", function() {

      if (svgForm.classList.contains("svg-with-text"))

              {

                if (toolbarText.classList.contains('toolbar-text--headline'))
                {
                  setPositionX(headlineText, 'right');
                  setPositionX(toolbarText, 'right');
                }
                if (toolbarText.classList.contains('toolbar-text--maintext'))
                {
                  setPositionX(headlineText, 'right');
                  setPositionX(toolbarText, 'right');
                }

              }

    });


/*
  document.getElementById("align-center").addEventListener("click", function() {

    if (toolbarText.classList.contains('toolbar-text--headline') && (headlineText.style.textAlign != "center")) {

    headlineText.style.textAlign = "center";

  } else
   if (toolbarText.classList.contains('toolbar-text--maintext') && (mainText.style.textAlign != "center")) {

    mainText.style.textAlign = "center";

    }
     toolbarText.style.marginLeft = "auto"
     toolbarText.style.marginRight = "auto";
  });

  document.getElementById("align-left").addEventListener("click", function(){


    if (toolbarText.classList.contains('toolbar-text--headline') && (headlineText.style.textAlign != "left")) {

    headlineText.style.textAlign = "left";

  } else
   if (toolbarText.classList.contains('toolbar-text--maintext') && (mainText.style.textAlign != "left")) {

    mainText.style.textAlign = "left";

  }
  toolbarText.style.marginLeft = "0";

  });

  document.getElementById("align-right").addEventListener("click", function(){

    if (toolbarText.classList.contains('toolbar-text--headline') && (headlineText.style.textAlign != "right")) {

    headlineText.style.textAlign = "right";


  } else if (toolbarText.classList.contains('toolbar-text--maintext') && (mainText.style.textAlign != "right")) {

    mainText.style.textAlign = "right";
  }
  toolbarText.style.marginRight = "0";

    });

}
*/
 textEditing();



function canvasResize (type) {

  var canvas = document.getElementById('canvas');
  var svg = document.getElementById('svg-form');
  var initialWidth = "720px";
  var initialHeight = "510px";

  if (type === 'square') {

			canvas.style.width = initialHeight;
			canvas.style.height = initialHeight;
      svg.style.width = initialHeight;
      svg.style.height = initialHeight;

			}

      if (type === 'horizontal') {

        canvas.style.width = initialWidth;
  			canvas.style.height = initialHeight;
        svg.style.width = initialWidth;
        svg.style.height = initialHeight;

      }

      if (type === 'vertical') {

        canvas.style.width = initialHeight;
  			canvas.style.height = initialWidth;
        svg.style.width = initialHeight;
        svg.style.height = initialWidth;

      }

 }

var colorCode = document.querySelector(".color-code");

colorCode.addEventListener("keypress", function(e) {
  if (e.keyCode === 13 || e.which === 13) {
			e.preventDefault();
			return false;
		}
  })

colorCode.addEventListener("keyup",function(e) {
  function validTextColour(stringToTest) {
      if (stringToTest === "") { return false; }
      if (stringToTest === "inherit") { return false; }
      if (stringToTest === "transparent") { return false; }

      var image = document.createElement("img");
      image.style.color = "rgb(0, 0, 0)";
      image.style.color = stringToTest;
      if (image.style.color !== "rgb(0, 0, 0)") { return true; }
      image.style.color = "rgb(255, 255, 255)";
      image.style.color = stringToTest;
      return image.style.color !== "rgb(255, 255, 255)";
  }

  var newBgColor = colorCode.innerHTML;
  if (validTextColour(newBgColor)) {
    document.querySelector(".color-preview").style.backgroundColor = newBgColor;
    document.querySelector(".svg-form").querySelector("#canvas").setAttribute("fill", newBgColor);
  }
})




function createSVGImage(evt) {

    var files = evt.target.files;

    for (var i = 0, f; f = files[i]; i++) {

      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      reader.onload = function(e) {


          var img = document.createElementNS('http://www.w3.org/2000/svg',"image");
          img.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', e.target.result);
          img.setAttributeNS(null, 'width', '100');
          img.setAttributeNS(null, 'height', '100');
          img.setAttributeNS(null,'x','10');
          img.setAttributeNS(null,'y','10');
          img.setAttributeNS(null, 'visibility', 'visible');

          svgForm.appendChild(img);

        };

      reader.readAsDataURL(f);

    }
  }

  document.getElementById('image-loader').addEventListener('change', createSVGImage, false);
