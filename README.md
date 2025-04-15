# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Mobile-friendly navigation menu
- Animated skill bars
- Project showcase section
- Contact form
- Reveal animations on scroll
- Typing animation effect
- Modern and clean UI

## Getting Started

1. Clone or download this repository
2. Replace the placeholder images in the `images` folder with your own images:
   - `profile.jpg`: Your profile photo (recommended size: 350x350px)
   - `project1.jpg`, `project2.jpg`, `project3.jpg`: Project screenshots or images
3. Open `index.html` in your preferred text editor to customize the content
4. Update your personal information, skills, projects, and contact details
5. Open `index.html` in a web browser to view your portfolio

## Customization

### Colors

The main color scheme can be changed by editing the CSS variables in the `style.css` file:

- Primary color: `#4070f4` (blue)
- You can change this color throughout the file to match your preferred color scheme

### Adding More Projects

To add more projects, copy and paste the project item structure in the HTML file and update the content:

```html
<div class="project-item">
    <img src="images/project4.jpg" alt="Project 4">
    <div class="project-info">
        <h3>New Project Title</h3>
        <p>Project description goes here.</p>
        <div class="project-links">
            <a href="#" class="btn">View Live</a>
            <a href="#" class="btn">View Code</a>
        </div>
    </div>
</div>
```

### Updating Skills

To update your skills, edit the skill items in the HTML file:

```html
<div class="skill">
    <div class="skill-name">Skill Name</div>
    <div class="skill-bar">
        <div class="skill-level" style="--width: 85%"></div>
    </div>
    <div class="skill-percent">85%</div>
</div>
```

Change the `--width` value and the percentage text to reflect your skill level.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts (Poppins)

## License

This project is open source and available for personal and commercial use.

## Acknowledgements

- Font Awesome for the icons
- Google Fonts for the Poppins font family 