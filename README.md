# My Portfolio 2.0🔥

Hi, I’m Sienna Li! 👋

I'm a current student at UC Berkeley Extension School. I am an avid Web Develepment learner as I am fascinated by all the things web can do. I find myself regularly trying to learn new algorithms and techniques that I can implement in my projects. I also enjoy doing side projects from time to time to apply what I have learned into something useful. HTML was the language I started programming with, but soon after, I've been using CSS and Javascript a lot more.Recently, I've been working on responsive web develop and design.

## Description 📝 

Link to webpage: https://siennameow.github.io/portfolio-2.0/

This portfolio website is built up with core skills including: HTML, CSS, Javascript, Bootstrap and jQuery. It presentes with name, photo, projects, and contact information about me. You can also check my latest blog and see my resume and be able to download it. It is designed to work with different screen sizes as you need. 

Please Enjoy! ❤️


## Table of Contents 📖

* [Webpage Preview ⭐](#webpage-preview-)
* [Sections 📚](#sections-)
* [Code-Snippet 💻](#code-snippet-)
* [Usage 💡](#usage-)
* [Technologies 🔧](#technologies-)
* [Authors 👩](#authors-)
* [Credits 🙌](#credits-)

## Webpage Preview ⭐


Desktop Version

![Sienna Li _ Web Developer](https://user-images.githubusercontent.com/101283174/163751698-2032e2c8-296b-4764-a00c-7439b7324d2e.gif)



Mobile Version  

![Sienna Li _ Web Developer (1)](https://user-images.githubusercontent.com/101283174/163751707-ef9ca96c-2140-41e9-bd4d-060656906f4f.gif)



## Sections 📚


✔️ About\
✔️ Image Picture\
✔️ Self Introduction\
✔️ Projects and Works\
✔️ Project website GIF demo\
✔️ Github Profile\
✔️ Link to my blog\
✔️ Modal for contact me\
✔️Mobie-first 


## Code-Snippet 💻

HTML

Contact Modal
```html
<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactTitle">
    <div class="modal-dialog" role="document">
      <div class="modal-content bg-indigo">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title" id="contactTitle">Contact Me</h3>
        </div>
        <div class="modal-body">
          <form class="mb-15">
            <div class="form-group">
              <label class="sr-only" for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <label class="sr-only" for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <label class="sr-only" for="subject">Subject</label>
              <input type="text" class="form-control" id="subject" placeholder="Subject" required>
            </div>
            <div class="form-group">
              <label class="sr-only" for="message">Message</label>
              <textarea class="form-control" id="message" rows="6" placeholder="Your message here..." required></textarea>
            </div>
            <small>*All fields are required</small>
            <div class="checkbox">
              <label>
                <input type="checkbox"> I'm a robot!
              </label>
            </div>
          </form>
          <div class="modal-footer">
            <button type="button" class="btn td-btn outline small white" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn td-btn outline small white">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
```

CSS

Project Cards style and hover
```css

#projects .carousel-control {
  background: none;
  color: #fffefd;
  font-size: 2rem;
  margin-top: 150%;
  opacity: 1;
  width: 100%;
  transition: all 0.2s ease-in-out;
  text-shadow: none;
}
#projects .carousel-control:focus,
#projects .carousel-control:hover {
  color: #7122e7;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}


```
JavaScript

Mobile Menu functions
```javascript

function openMenu() {
    $menuIcon.removeClass('glyphicon-menu-hamburger').addClass('glyphicon-remove active');
    $modalBackdropDiv.css('z-index', 900);
    $body.append($modalBackdropDiv);
    if (!$navbar.hasClass('menu-fixed')) {
        $navbar.css('background-color', 'rgba(255,254,253,0.97)');
    }
    // Close menu after clicking modal-backdrop
    $modalBackdropDiv.on('click', function () {
        $('.navbar-toggle').click();
        closeMenu();
    });
}
function closeMenu() {
    $menuIcon.removeClass('glyphicon-remove active').addClass('glyphicon-menu-hamburger');
    $modalBackdropDiv.css('z-index', 1025).remove();
    if (!$navbar.hasClass('menu-fixed')) {
        $navbar.css('background-color', 'transparent');
    }
}

```

## Usage 💡


The link of the webpage is: https://siennameow.github.io/portfolio-2.0/


If you want to use the template to create your own portfolio, you can :


- Step 1
    - create github repository for your portfolio.
- Step 2
    - Option 1: 🍴 Fork this repo!
    - Option 2: 👯 Clone this repo to your local machine.
- Step 3
    - Start building your code in your own folder 🔨🔨🔨
    - Modify the content of index.html , style.css and script.js
    - Add or remove images from assets/images/ directory as per your requirement.
- Step 4
    - Push your code to the main branch.
    - Deploy your portfolio page.

## Technologies 🔧

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery](https://jquery.com/)
* [Bootstrap](https://getbootstrap.com/)

## Authors 👩

* **Sienna Li** 

- [Portfolio](#)
- [Github](https://github.com/siennameow)
- [LinkedIn](https://www.linkedin.com/in/hexuanli/)


## Credits 🙌

Thanks to the following people who helped me in this project:
- Jerome Chenette
- Manuel Nunes
- Vince Lee
