# Personal Portfolio with React

This is a dynamic and modern personal portfolio, created with React to showcase my projects, skills, and professional experience.

![Portfolio Screenshot](./src/assets/images/portfolio-screenshot.png)

## ✨ Features

*   **Single Page Application (SPA):** Built with React and React Router for a smooth, no-reload navigation experience.
*   **Responsive Design:** Adaptable to different screen sizes, from mobile to desktop.
*   **Clear Sections:** Includes Home, About Me, Portfolio, and Contact sections.
*   **Dynamic Portfolio:** Project previews are automatically generated from their links using the thum.io service.
*   **Theme Switcher:** Allows switching between a light and dark theme.
*   **Functional Contact Form:** Integrated with EmailJS and Google reCAPTCHA to securely receive messages.

## 🛠️ Technologies Used

*   **Frontend:** React, HTML5, CSS3
*   **Routing:** React Router DOM
*   **UI Components:** React Bootstrap
*   **Icons:** React Icons
*   **Form Submission:** EmailJS
*   **Security:** Google reCAPTCHA
*   **Deployment:** Netlify
*   **Domain:** nic.ar

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

*   Node.js (v14 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/pablogiroud/portfolio.git
    cd portfolio
    ```

2.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure environment variables:**
    Create a `.env` file in the project root and add the following variables. You can use the `.env.example` file as a template.
    ```
    REACT_APP_YOUR_SERVICE_ID=
    REACT_APP_YOUR_TEMPLATE_ID=
    REACT_APP_PUBLIC_KEY=
    REACT_APP_CAPTCHA_SITE_KEY=
    ```
    *   Get your credentials from EmailJS.
    *   Get your Site Key from Google reCAPTCHA.

### Running the project

*   **For development:**
    ```bash
    npm start
    ```
    Opens http://localhost:3000 in your browser.

*   **For production:**
    ```bash
    npm run build
    ```
    This will create a `build` folder with the static files ready for deployment.

## 🔧 Customization

Most of the site's content (texts, social media links, portfolio projects, etc.) can be easily modified by editing the file:
`src/content_option.js`

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 📬 Contact

Pablo Giroud - pablogiroud@gmail.com

Project Link: https://github.com/pablogiroud/portfolio

---