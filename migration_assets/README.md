# Migration Assets

This folder contains all the necessary data and assets to migrate the portfolio to a React application.

## Contents

- **data.json**: The core data file containing profile information, projects, services, and other content. This was extracted from `data/data.json`.
- **images/**: Contains all image assets used in the site (profile photos, project banners, icons).
- **icons/**: Contains app icons and favicons.
- **fonts/**: Contains custom fonts used in the project.

## Usage in React

1. **Data**: Import `data.json` into your React components.

    ```javascript
    import data from './data.json';
    ```

2. **Images**: Move the `images` folder to your React project's `public` directory. The paths in `data.json` (e.g., `images/photos/black-white.png`) will then work automatically if you use them in `src` attributes.
3. **Fonts**: Configure the fonts in your CSS (e.g., `index.css`) or use a font loader.
