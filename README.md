# UCF_homeworkWeek12
Bambazon
# Node.js & MySQL

## Overview

In this activity, I'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. 

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.--DONE

## Submission Guide


Make sure you use the normal GitHub. Because this is a CLI App, there will be no need to deploy it to Heroku. This time, though, you need to include screenshots, a gif, and/or a video showing us that you got the app working with no bugs. You can include these screenshots or a link to a video in a `README.md` file.
https://github.com/jedmike/UCF_homeworkWeek12_Bambazon

* Include screenshots (or a video) of typical user flows through your application (for the customer and if relevant the manager/supervisor). This includes views of the prompts and the responses after their selection (for the different selection options).
https://github.com/jedmike/UCF_homeworkWeek12_Bambazon/images
Images are ordered _1-_N.



## Instructions

### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`. --DONE

2. Then create a Table inside of that database called `products`.--DONE

3. The products table should have each of the following columns:--DONE

   * item_id (unique id for each product)--DONE

   * product_name (Name of product)--DONE

   * department_name--DONE

   * price (cost to customer)--DONE

   * stock_quantity (how much of the product is available in stores)--DONE

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).--DONE

5. Then create a Node application called `bamazoncus.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.--DONE

6. The app should then prompt users with two messages.--DONE

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.--DONE

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.--DONE

   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

- - -

* If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.--DONE


- - -



### Create a README.md--DONE



- - -

### Add To Your Portfolio--DONE



