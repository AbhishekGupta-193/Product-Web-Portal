# ProductWebPortal (Angular Workshop)


## Task3: Product Web Portal
 - create a login & signup component for user. 
 - after successful login user should navigate to dashboard
 - dashboard will be consists of header with search bar below that filter tab which will have options like price, rating, delivery days etc. 
    & below that one container which will contains all products in card format
 - for product data required properties are name, description, price, rating, review, delivery days, seller etc.
 - Whenever user clicks on product card a detailed view of product should open with all product details
 - Whenever a user selects any filter from the filter tab, that time product list needs to update according to filter & it should reflect in the UI.
     This change needs to do in UI only
 - In product details view components one input field needs to add to add review. When user clicks on submit new review should get added for that book by
     calling api & changes need to reflect in UI as well
 - In header component search bar whatever query user will enter based on that data need to be filter in UI
 
## Data required
- user data - list of user object - user object will have properties like name, mob, email, password etc
- product data - list of product object
        product object structure = {
               name : string,
               description: string,
               rating : number,
               price: number,
               delivery_days: number,
               reviews : string [ ]
        }
