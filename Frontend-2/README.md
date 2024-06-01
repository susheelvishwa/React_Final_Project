># Frontend 2

  - work on home page - `useNavigate()` from `react-router-dom`
  - work on login page - Axios  - Make a post request and login user.
  - now working on Login page

  ![Alt text](./Frontend-1/src/assets/image.png)

  --------------------------------------------------------------------------

># Navigation in React with `react-router-dom`

## Introduction to `react-router-dom`
`react-router-dom` is a library used in React applications for routing. It provides various components and hooks to navigate between different pages or views in a React app.

## Using the `Link` Component

The `Link` component is used to create navigational links in your application. When clicked, it navigates to a specified route without refreshing the entire page.

### Example
```jsx
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}

## Summary

### `Link` Component:

- **Purpose**: To create navigational links.
- **Use Case**: When you want to navigate to a different page via user interaction with a link.
- **Example**: 

  <Link to="/about">Go to About Page</Link>
```


### `useNavigate` Hook:

- **Purpose**: To programmatically navigate between routes.
- **Use Case**: When you need to perform additional operations or checks before navigating.
- **Example**:
    ```jsx
    const navigate = useNavigate();
    navigate('/about');
    ```

By using both `Link` and `useNavigate`, you can handle navigation in your React application both declaratively (with links) and imperatively (with functions).
