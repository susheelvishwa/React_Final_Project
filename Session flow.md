# Frontend - 1 

```
1. Setup Chakra UI React Router DOM and Axios.
2. Create basic pages 
  - Home 
  - About
  - Contact
  - Login
  - Task
```
![Alt text](./Frontend-1/src/assets/image.png)


># Frontend 2

  - work on home page - `useNavigate()` from `react-router-dom`
  - work on login page - Axios  - Make a post request and login user.
  - now working on Login page
  - Setup AuthContext, Save token in AuthContext, Implement Login and
Logout functionality in application
  - Setup Protected Routes or Private Routes Implement Private Routes

  ![Alt text](./Frontend-2/src/assets/image7.png)


># Frontend 3


```
starting 11 min talking about after clicking the button how to redirect the page
Example After clicking login button Redirect the Home page
```

# Tickets Page

## Create Ticket Button (complete)
- Positioned at the top right corner.
- Redirects to the Ticket Create page.

## Ticket Cards (complete)
- Displayed in a grid layout.
  - **Large Screens and Above**: 3 cards per row.
  - **Medium Screens and Above**: 2 cards per row.
  - **Small Screens**: 1 card per row.
- Each card includes:
  - **Title**: [Ticket Title]
  - **Status**: [Ticket Status]
  - **Priority**: [Ticket Priority]
  - **View Button**: Redirects to the Ticket View page.

## Sorting and Filtering Options

### Sort by Priority
- Options: 
  - Low to High
  - High to Low

### Filter by Status
- Options: 
  - Pending
  - Progress
  - Completed

## Functional Behavior
- **Create Ticket Button**: Redirects to the Ticket Create page.
- **View Button**: Redirects to the Ticket View page.
- **Sort by Priority**: Rearranges tickets based on selected priority.
- **Filter by Status**: Displays tickets matching the selected status.


># Frontend 4

># Ticket Create Page

Include the following elements to create a new ticket:

- Input box for Title
- TextArea for Description
- Select box for Assignee details (values: names of assignees)
- Select box for Status (values: "Pending", "Progress", "Completed")
- Select box for Priority level (values: 0 to 9)
- Create Ticket button to submit the form, making a POST request to update the ticket information on both the server and client. Redirect to the Tickets page upon successful creation.


