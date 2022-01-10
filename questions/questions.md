*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  


  
--
RESPONSE: 

From bee@algolia.com 
to marissa@startup.com 
Subject Bad Design 

Hello Marissa, 

I'm very sorry to hear that you and your team don't like the initial designs. One thing we like to focus on here is human-centered design so we want to make sure that, not only does it look nice, but also that it is easy and intuitive to use. Let me reach out to our design team to see what their availability is to jump on a call and we can discuss redesigning the experience. I think it would be valuable to get both of our teams together to discuss what we want the experience to look and feel like so we have a better idea of how to develop the tools for you to get it done! 

I'll have updated designs to you soon and we can review them in our upcoming call, please don't hesitate to reach out if there's anything else you need from us! 

Thanks, 
Bee Sharpe

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   

  
--
--
RESPONSE: 

From: bee@algolia.com 
Subject: Re: URGENT ISSUE WITH PRODUCTION!!!!

Hey there Carrie, 

Sorry to hear that you've run into an issue with your production code. It sounds like you have hit the records limit for the algolia search experience. For your tier of service you can have 10,000 individual records that get indexed and are searchable, but it sounds like you might be needing more space than that. 

For the short term, I can enable an overflow on your account just to get everything working and running for your customers and prevent those errors from coming up when someone submits a review. 

For the long term, I can work with you to do some clever database management so we can make the most efficient use of the space you have available. We can start with archving the oldest datasets and ones that don't get accessed as frequently. That data won't be gone forever, but we can put it in a cache that will still make it accessible, but will free up space for the datasets that get accessed more frequently. We could also simply change your subscription type to allow for more records to be stored and indexed. This would be faster, but would end up costing more. 

Let us know how you want to move forward and we can work with you to make sure your application/service is running as quickly and efficiently as possible. 

Thanks again for reaching out, 
Bee 


*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  

--
RESPONSE: 

From: bee@algolia.com 
Subject: Error on website  


Hey Marc, 

Thanks for reaching out, I'd be happy to help with this issue. It looks like a dependency might not have been installed correctly, or maybe wasn't declared before you tried to use it. Either way this should be a quick fix. If you could link me to the codebase I can take a look and suggest some fixes to the issue, or I can work with your dev team to get a fix going. Or if you wanted to hop on a call and talk through it I can do that too, you can put some time on my calendar here: calendly.com/book-time-with-bee.

Let me know and I'd be happy to help you out with this issue

Thanks, 
Bee