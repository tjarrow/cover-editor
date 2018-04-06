var container = document.querySelector('.container');


 var canvas = document.getElementById('canvas');

 var canvasRect = document.getElementById('canvas-rect');


var svgForm = document.querySelector('.svg-form');

//svgForm = createSVGform();

// screen type buttons
var squareCanvas = document.getElementById('square');
var horizontalCanvas = document.getElementById('horizontal');
var verticalCanvas = document.getElementById('vertical');

//color menu initialization
var toolbarColor = document.getElementById("toolbar-color");

//textareas initialization
var colorPreview = document.querySelector(".color-preview");

var colorCode = document.querySelector('.color-code');
var colorCodeBackground;// = document.querySelector('.color-code-background'); // = document.querySelector(".color-code-background");
var colorCodeText;

//editing toolbar initialization

var toolbarText;

//text adding
var mainTextButton = document.getElementById("main-text-button");

var headlineTextButton = document.getElementById("headline-text-button");

var headlineText, //= document.getElementById("headline-text"),
    mainText; //= document.getElementById("main-text");
var mainTextFO;
// created text initialization


// canvas text initialization
var textEditable;

var downloadButton = document.querySelector('.buttons__download');

container.addEventListener("click", function(e) {showColorToolbar(e)});

function showColorToolbar(e) {
  if ((e.target === canvasRect) || (e.target === colorCodeBackground))
    toolbarColor.classList.add('toolbar-color--visible');

    else {
      toolbarColor.classList.remove('toolbar-color--visible');
    }
}


svgForm.addEventListener("click", addColorCodeBackground );


function addColorCodeBackground () {
  colorCode.classList.add('color-code-background');
  colorCodeBackground = document.querySelector('.color-code-background');
  colorCodeBackground.addEventListener("keypress", function(e) {enterColor(e)} );
  colorCodeBackground.addEventListener("keyup", function (e) {setBgColor()} );
}


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

      case 'center-square':
        element.setAttribute('x', '200');
        break;

        case 'center-vertical':
            element.setAttribute('x', '300');
            break;

    }

  }

  function setToolbarPositionX(toolbar, positionX) {

    switch (positionX) {
      case 'center':
        toolbar.style.marginLeft = 'auto';
        toolbar.style.marginRight = 'auto';
        break;

      case 'left':
        toolbar.style.marginLeft = '20px';
        break;

      case 'right':
        toolbar.style.marginRight = '20px';
        break;

    }
  }

  function setPositionY(element, positionY) {

    switch (positionY) {

      case 'top':
        element.setAttribute('y', '40');
        break;

      case 'middle':
        element.setAttribute('y', '150');
        break;

      case 'bottom':
        element.setAttribute('y', '280');
        break;

        case 'top-vertical':
          element.setAttribute('y', '40');
          break;

        case 'middle-vertical':
          element.setAttribute('y', '280');
          break;

        case 'bottom-vertical':
          element.setAttribute('y', '510');
          break;
    }

}

function setToolbarPositionY(toolbar, positionY) {
  switch (positionY) {
    case 'top-vertical':
      toolbar.style.bottom = '100% ';
      toolbar.style.marginTop = 'inherit ';
      break;

    case 'middle-vertical': // для вставки изображения в вертикальном режиме
      //toolbar.style.marginLeft = '20px';
      break;

      case 'bottom-vertical':
        toolbar.style.marginTop = '-50%';
        break;

        case 'top-vertical':
          toolbar.style.bottom = '100% ';
          toolbar.style.marginTop = 'inherit ';
          break;

        // case 'middle-vertical': ;
        //   break;

          case 'bottom-vertical':
            toolbar.style.marginTop = '-50%';
            break;

              case 'top-vertical':
              toolbar.style.bottom = '100% ';
              toolbar.style.marginTop = 'inherit ';
              break;

              case 'top-square':
              toolbar.style.marginTop = '-97% !important ';
              break;

              case 'bottom-square':
              toolbar.style.marginTop = '-50%';
              break;

      }

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
  setPositionX(toolbarText, "center");

  if (toolbarText.classList.contains("toolbar-text--maintext"))

    toolbarText.classList.remove("toolbar-text--maintext");


  toolbarText.classList.add("toolbar-text--headline");
  toolbarText.classList.add("toolbar-text--visible");

//textPositioning();
};

var mainTextToolbarAppear = function (mainTextInit) {

  toolbarText = document.getElementById("toolbar-text");

  if (toolbarText.classList.contains("toolbar-text--headline"))

  toolbarText.classList.remove("toolbar-text--headline");

  console.log("main text");

  toolbarText.classList.add("toolbar-text--maintext");
  toolbarText.classList.add("toolbar-text--visible");


}


document.getElementById("color-preview--text").addEventListener("click", function() {
    console.log('preview');

      if (toolbarText.classList.contains("toolbar-text--maintext")) {
        toolbarText.classList.remove("toolbar-text--visible");
        toolbarColor.classList.add("toolbar-color--maintext");
      }

       if (toolbarText.classList.contains("toolbar-text--headline")) {
        toolbarText.classList.remove("toolbar-text--visible");
        toolbarColor.classList.add("toolbar-color--headline");
      }

      colorCode.classList.add("color-code-text");
      colorCode.classList.remove("color-code-background");
      colorCodeText = document.querySelector(".color-code-text");


      colorCodeText.addEventListener("keypress", function(e){enterColor(e)} );
       colorCodeText.addEventListener("keyup", function(e) {setTextColor()} );

})

document.getElementById("color-preview--background").addEventListener("click", function() {

  if (toolbarColor.classList.contains("toolbar-color--maintext"))
  {
    toolbarColor.classList.remove("toolbar-color--maintext");
    toolbarText.classList.add("toolbar-text--visible");
  }

  if (toolbarColor.classList.contains("toolbar-color--headline")) {
   toolbarColor.classList.remove("toolbar-color--headline");
   toolbarText.classList.add("toolbar-text--visible");
  }

  colorCode.classList.remove("color-code-text");
  colorCode.classList.add("color-code-background");
})


function MainTextInit(text, svgElem) {

 //setPositionX(svgElem,'center');
 setPositionY(svgElem,'bottom');

 text.innerHTML = "Main text";
 text.addEventListener('click', mainTextClicked, false);

}

function HeadlineTextInit(text, svgElem) {

 //setPositionX(svgElem,'center' );
 setPositionY(svgElem, 'top');

 text.innerHTML = "Headline";
 text.addEventListener('click', headlineTextClicked, false);
}

function TextAppend(textType) {

    var TextInSVG = document.createElementNS('http://www.w3.org/2000/svg',"foreignObject");

    var TextEditable = document.createElement("h3");

    TextEditable.setAttribute("contenteditable", "true");

    TextEditable.className = "text-editable";


    svgForm.appendChild(TextInSVG);

     TextInSVG.setAttribute('width', '100%');

    TextInSVG.setAttribute('height', '30px');

    svgForm.classList.add ("svg-with-text");

    TextInSVG.appendChild(TextEditable);



    if (textType == "main text") {
      TextInSVG.id = "main-text-fo" ;
      mainTextFO = document.getElementById("main-text-fo");
      TextEditable.classList.add("main-text");
      MainTextInit(TextEditable, TextInSVG);
      mainText = document.querySelector(".main-text");
}

       else if (textType == "headline text") {
         TextEditable.classList.add("headline-text") ;
         TextInSVG.id = ("headline-text-fo") ;
         HeadlineTextInit(TextEditable,TextInSVG);
         headlineText = document.querySelector(".headline-text");
       }

       //TextEditable = document.querySelector(".text-editable");

}

mainTextButton.addEventListener("click", function() { TextAppend('main text') });

headlineTextButton.addEventListener("click", function() { TextAppend('headline text') });

function textResize(){

      if (toolbarText.classList.contains('toolbar-text--headline')) {
        headlineText.style.fontSize = "150%";
      }

      else if (toolbarText.classList.contains('toolbar-text--maintext')) {
        mainText.style.fontSize = "150%";
      }
      // добавить изменение цвета текста
}

document.querySelector(".text-resize").addEventListener("click", textResize);


    document.getElementById("align-center").addEventListener("click", function() {

          if (svgForm.classList.contains("svg-with-text"))
          {
            if (toolbarText.classList.contains('toolbar-text--headline'))
            {
              //setPositionX(headlineText, 'center');
              headlineText.style.textAlign = 'center'
              setToolbarPositionX(toolbarText, 'center');

            }
            if (toolbarText.classList.contains('toolbar-text--maintext'))
            {
              //setPositionX(mainText, 'center');
              mainText.style.textAlign = 'center';
              setToolbarPositionX(toolbarText, 'center');
            }

          }

    });

    document.getElementById("align-left").addEventListener("click", function() {

      if (svgForm.classList.contains("svg-with-text"))
      {
          if (toolbarText.classList.contains('toolbar-text--headline'))
          {
            headlineText.style.textAlign = 'left';
            setToolbarPositionX(toolbarText, 'left');
          }
          if (toolbarText.classList.contains('toolbar-text--maintext'))
          {
            mainText.style.textAlign = 'left';
            setToolbarPositionX(toolbarText, 'left');
          }

          }

    });

    document.getElementById("align-right").addEventListener("click", function() {

      if (svgForm.classList.contains("svg-with-text"))

              {

                if (toolbarText.classList.contains('toolbar-text--headline'))
                {
                  headlineText.style.textAlign = 'right';
                  setToolbarPositionX(toolbarText, 'right');
                }
                if (toolbarText.classList.contains('toolbar-text--maintext'))
                {
                  mainText.style.textAlign = 'right';
                  setToolbarPositionX(toolbarText, 'right');
                }

              }

    });

 //textEditing();

function canvasResize (type) {

  var canvas = document.getElementById('canvas');
  var svg = document.getElementById('svg-form');
  var screenIcons = document.getElementsByClassName("screen-icons");
  var initialWidth = "740px";
  var initialHeight = "510px";

  if (type === 'square') {

			canvas.style.width = initialHeight;
			canvas.style.height = initialHeight;

      svg.style.width = initialHeight;
      svg.style.height = initialHeight;

      for (i = 0; i < screenIcons.length; i++)
          screenIcons[i].classList.remove("active");

      document.querySelector(".screen-icons-square").classList.add("active");

      if (toolbarText.classList.contains("toolbar-text--maintext"))
      setToolbarPositionY(toolbarText, "bottom-square");

      if (toolbarText.classList.contains("toolbar-text--headline"))
      setToolbarPositionY(toolbarText, "top-square");

      svg.querySelector("rect").setAttribute("width", parseInt(initialHeight));
			svg.querySelector("rect").setAttribute("height", parseInt(initialHeight));
			svg.querySelector("defs").querySelector("rect").setAttribute("width", parseInt(initialHeight) - 4);
			svg.querySelector("defs").querySelector("rect").setAttribute("height", parseInt(initialHeight) - 4);
			svg.querySelector("mask").setAttribute("width", parseInt(initialHeight));
			svg.querySelector("mask").setAttribute("height", parseInt(initialHeight));
			svg.querySelector("mask").querySelector("rect").setAttribute("width", parseInt(initialHeight));
			svg.querySelector("mask").querySelector("rect").setAttribute("height", parseInt(initialHeight));
			svg.setAttribute("width", initialHeight);
			svg.setAttribute("height", initialHeight);
			svg.setAttribute("viewBox","0 0 " + parseInt(initialHeight) + " "+ parseInt(initialHeight));
			svg.querySelector("#canvas-rect").setAttribute("height", parseInt(initialHeight));
      svg.querySelector("#canvas-rect").setAttribute("width", parseInt(initialHeight));

			}

      if (type === 'horizontal') {

        canvas.style.width = initialWidth;
  			canvas.style.height = initialHeight;
        svg.style.width = initialWidth;
        svg.style.height = initialHeight;

        for (i = 0; i < screenIcons.length; i++)
            screenIcons[i].classList.remove("active");

        document.querySelector(".screen-icons-horizontal").classList.add("active");

        svg.querySelector("rect").setAttribute("width", parseInt(initialWidth));
  			svg.querySelector("rect").setAttribute("height", parseInt(initialHeight));
  			svg.querySelector("defs").querySelector("rect").setAttribute("width", parseInt(initialWidth) - 4);
  			svg.querySelector("defs").querySelector("rect").setAttribute("height", parseInt(initialHeight) - 4);
  			svg.querySelector("mask").setAttribute("width", parseInt(initialWidth));
  			svg.querySelector("mask").setAttribute("height", parseInt(initialHeight));
  			svg.querySelector("mask").querySelector("rect").setAttribute("width", parseInt(initialWidth));
  			svg.querySelector("mask").querySelector("rect").setAttribute("height", parseInt(initialHeight));
  			svg.setAttribute("width", initialWidth);
  			svg.setAttribute("height", initialHeight);
  			svg.setAttribute("viewBox","0 0 " + parseInt(initialWidth) + " "+ parseInt(initialHeight));
  			svg.querySelector("#canvas-rect").setAttribute("height", parseInt(initialHeight));
        svg.querySelector("#canvas-rect").setAttribute("width", parseInt(initialWidth));

      }

      if (type === 'vertical') {

        canvas.style.width = initialHeight;
  			canvas.style.height = initialWidth;
        svg.style.width = initialHeight;
        svg.style.height = initialWidth;

        for (i = 0; i < screenIcons.length; i++)
            screenIcons[i].classList.remove("active");

        document.querySelector(".screen-icons-vertical").classList.add("active");

        setPositionY(mainTextFO, "bottom-vertical");

        if (toolbarText.classList.contains("toolbar-text--maintext"))
        setToolbarPositionY(toolbarText, "bottom-vertical");
        //toolbarText.style.marginTop = ''

        else if (toolbarText.classList.contains("toolbar-text--headline"))
        setToolbarPositionY(toolbarText, "top-vertical");


        svg.querySelector("rect").setAttribute("width", parseInt(initialHeight));
  			svg.querySelector("rect").setAttribute("height", parseInt(initialWidth));
  			svg.querySelector("defs").querySelector("rect").setAttribute("width", parseInt(initialHeight) - 4);
  			svg.querySelector("defs").querySelector("rect").setAttribute("height", parseInt(initialWidth) - 4);
  			svg.querySelector("mask").setAttribute("width", parseInt(initialHeight));
  			svg.querySelector("mask").setAttribute("height", parseInt(initialWidth));
  			svg.querySelector("mask").querySelector("rect").setAttribute("width", parseInt(initialHeight));
  			svg.querySelector("mask").querySelector("rect").setAttribute("height", parseInt(initialWidth));
  			svg.setAttribute("width", initialHeight);
  			svg.setAttribute("height", initialWidth);
  			svg.setAttribute("viewBox","0 0 " + parseInt(initialHeight) + " "+ parseInt(initialWidth));
  			svg.querySelector("#canvas-rect").setAttribute("width", parseInt(initialHeight));
        svg.querySelector("#canvas-rect").setAttribute("height", parseInt(initialWidth));

      }

 }

 function enterColor(e)
 {
   if (e.keyCode === 13 || e.which === 13) {
 			e.preventDefault();
 			return false;
 		}
 }


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

 function setBgColor () {

   var newBgColor = colorCodeBackground.innerHTML;
   if (colorCode.classList.contains("color-code-background"))
   {
   if (validTextColour(newBgColor)) {
     document.querySelector(".color-preview").style.backgroundColor = newBgColor;
     document.querySelector(".svg-form").querySelector("#canvas-rect").setAttribute("fill", newBgColor);
   }
   }
 }

 function setTextColor () {
   var newTextColor = colorCodeText.innerHTML;
   if (colorCode.classList.contains("color-code-text"))
     {
     if (validTextColour(newTextColor)) {
     document.querySelector(".color-preview").style.backgroundColor = newTextColor;
     var texts = document.getElementsByClassName("text-editable");
     for (i = 0; i < texts.length; i++)
     texts[i].style.color = newTextColor;
     }
   }
 }

 function setHeadlineColor () {
   var newTextColor = colorCodeText.innerHTML;
   if (toolbarColor.classList.contains("toolbar-color--headline"))
     {
       if (validTextColour(newTextColor)) {
     document.querySelector(".color-preview").style.backgroundColor = newTextColor;
     document.querySelector("#headline-text").querySelector(".text-editable").style.color = newTextColor;
     }
   }
 }

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
          img.setAttributeNS(null, 'width', '200');
          img.setAttributeNS(null, 'height', '200');
          // img.setAttributeNS(null,'x','10');
          // img.setAttributeNS(null,'y','10');
          img.setAttributeNS(null, 'visibility', 'visible');
          setPositionX(img,'center');
          setPositionY(img,'middle');

          svgForm.appendChild(img);

        };

      reader.readAsDataURL(f);

    }
  }

  document.getElementById('image-loader').addEventListener('change', createSVGImage, false);

  function SaveCover() {

    let serializer = new window.XMLSerializer(),
            source = serializer.serializeToString(svgForm);

    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {

          source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');

        }

    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

    var link = document.createElement('a');
    link.style.display = 'none';
    link.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source));
    link.setAttribute('download', 'cover.svg');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

downloadButton.addEventListener('click', SaveCover);
