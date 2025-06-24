# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# 🔄 React Flow Drag-and-Drop Block Editor

This project is an interactive React-based editor built with **React Flow**. It allows users to:

- Drag & drop predefined blocks ("Block A", "Block B") into a canvas.
- Connect only from **Block A ➝ Block B** (Block B ➝ Block A is disallowed).
- Right-click on blocks to view a custom context menu.
- Modular and clean codebase with plain CSS.

---

## 📁 Project Structure

my-reactflow-app/
├── public/
├── src/
│ ├── components/
│ │ ├── BlockPanel.jsx
│ │ ├── CustomNode.jsx
│ │ ├── ContextMenu.jsx
│ │ └── FlowCanvas.jsx
│ ├── styles.css
│ └── App.jsx
├── package.json
└── README.md

```bash
git clone https://github.com/your-username/reactflow-block-editor.git
cd reactflow-block-editor

## 2. Install Dependencies

Make sure you have Node.js and npm installed (Node >= 14 recommended).
npm install
If you see an error like react-scripts: not found, install it manually:

npm install react-scripts --save

## ▶️ Running the App

To start the development server:

npm start
The app will be available at: [http://localhost:3000](http://localhost:3000)

## 🔧 Tech Stack Used
React
React Flow
Plain CSS (No frameworks)
Functional Components + Hooks;