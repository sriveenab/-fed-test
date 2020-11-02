## Description of my solution

I have created Users components where all the users are bounded together inside users_wrapper. 
I am using UserCard component to reuse the user rendering.
On load of the application, whenever App component is rendered, on componentdidmount i am calling getRandomUser method to first user information. The result from the api is stored in the state(users)
I added a button(Load more..) at the bottom of all the user cards. On click of this button, again the api to get randmo user is called. The new user is pushed to the users state and the new user is being rendered.

The application is made responsive for large and medium screens.
The screenshots of the application are kept under src/__snapshots__ folder.
All the components are kept under src/components folder
If there are any utils files, those can be kept under utils folder.

Note:
Sometimes the API is not giving immediate result or having error, So on click of Load button, you may not see any user information updated on the page. Click on the Load more button multiple times and check.


## Things I would do next

Anything that you didn't get time to do should go here.
1. I want to add button to every user which can update the user information.
2. A delete button can be added on each user card to delete the particular user.
3. To improve the styling of the user card
4. Can add a form to create a new user
5. I can improve on linting.


## Assumptions that I made

Any assumptions that were made about the application - this could be around acceptance criteria etc.
