# Ticket View Page

## Overview
The Ticket View Page displays detailed information about a specific ticket. It includes the following details:
- Title
- Description
- Assignee
- Status
- Priority

Additionally, the page provides two action buttons:
- Edit: Redirects the user to the Ticket Edit page.
- Delete: Deletes the ticket and redirects the user back to the Tickets page.

## Components and Functionality

### Ticket Details
The page should display the following ticket details:
- **Title**: The title of the ticket.
- **Description**: A detailed description of the ticket.
- **Assignee**: The name of the person assigned to the ticket.
- **Status**: The current status of the ticket (Pending, Progress, Completed).
- **Priority**: The priority level of the ticket (0 to 9).

### Edit Button
- **Purpose**: Allows the user to edit the ticket.
- **Functionality**: When clicked, the Edit button redirects the user to the Ticket Edit page.
- **Implementation**: Use React Router's `useHistory` hook or a Link component to navigate to the Ticket Edit page.

### Delete Button
- **Purpose**: Allows the user to delete the ticket.
- **Functionality**: When clicked, the Delete button sends a DELETE request to the server to remove the ticket. Upon successful deletion, the user is redirected back to the Tickets page.
- **Implementation**: Use Axios to send a DELETE request to the appropriate API endpoint. Upon success, use React Router's `useHistory` hook to redirect the user to the Tickets page.