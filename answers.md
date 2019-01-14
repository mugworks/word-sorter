## TOOLS
1. In your opinion, what’s helpful about version control systems? What’s annoying about them?

Version control has multiple advantages. It allows multiple users to check out the code, work on it and merge it back in. It enables people to determine what code is in production vs development vs testing. If code is not working in a new revision, it is easy to compare the differences between the old and new versions to help troubleshoot where the problem might lay. 
I use Git GitHub for version control and the only thing that I find annoying is difficulty adding images to wikis. One picture can often explain things better than words and I wish it was easier to insert images.

2. What are some pros and cons of using Docker to develop, test, and deploy software?

#### Docker pros -
* No inconsistencies between computers. It works the same for everyone which is especially useful so that development and QA are experiencing identical behaviors. 
* It just works. You don’t have to install tools and dependencies on each local machine running the application.
* It can start up in seconds.

#### Docker cons - 
* Security may be an issue. Hackers are targeting containers. Since containers share an operating system, there are vulnerabilities if one container has a security breach.
* I have heard some people complain that there is a high learning curve.


3. How do you choose which language to use for a given task? How did you choose the language for the programming exercise above? 

Each language has pros and cons. The needs of the business, the capability and accessibility of people that know the chosen language should be part of the consideration when choosing which language to use. For example, if you need to perform precise calculations, you would not choose Javascript but perhaps Python. Some languages perform better for scripts or automations while others are better for large desktop applications. I think the most important thing is that you consider what is best for the business and for your team.

I chose Javascript for the exercise because it is the language I have the most breadth of experience and I felt most confident.

## TESTING METHODOLOGY
1. What’s the right role for QA in the software development process?

I personally like the idea put forth in a blog post by Kevin Cruden. "QA brings to the project, the mindset of 'Are we building the correct product and, if so, are we building it correctly?'." QA looks at the bigger picture to ensure that not only does the software work, but does it work like the business or the customer expects it to work. I think QA should be involved in all phases of software from developing user stories through implementation.

2. As a QA person, you have 2 weeks to prepare before your team starts writing software. What do you do? 

I would ensure that I knew all of the requirements, user stories, and expectations. I would start writing validation tests as I gathered more information. I would familiarize myself with any new technologies that the team might be using such as new front-end frameworks.

3. When is it appropriate to use automated testing? When is it appropriate to use manual testing? 

Automated testing is useful when -
  * the same execution will be repeated often
  * the test does not require an evaluation of the user experience
  * the test is analyzing load or performance
  * reliability is essential and human test fatigue could lead to errors

Manual testing is useful when - 
  * the software is being evaluated for user friendliness or design considerations
  * only a few tests need to be performed (depends upon set up time for an automated test)
  * exploratory tests need to occur


4. Your dev team has just modified an existing product by adding new features and refactoring the code for old features. The devs claim to have written unit tests; you’re in charge of integration testing. Dedicated teams are handling performance and security testing, so you don’t have to. As is always the case in the real world, you don’t have time to test everything. What factors do you think about as you decide where to focus your testing efforts? How do you decide what not to test?

Factors that would impact safety, critical requirements and user satisfaction would be my first choices for evaluation. With regards to safety, I currently work with software that provides recommendations of doses for injections. I consider that my top priority for testing since a wrong result can impact a person's health. Key criticial requirements would be my second consideration. Are there calculations that would impact the user so greatly that it would cause major negative consequences - prices are given incorrectly, calculations are wrong, information is incorrect. Then I would look at the user experience. Does the software take long to load? Does the site freeze and need refreshing? Can I navigate properly. I would look for issues that would cause the user to give up on the software quickly.

To select areas that I would not test, I would look for portions of the software that were accessed less often by users, areas that were more cosmetic in nature and areas that were currently undergoing changes that would be tested in the near future.

## ABOUT YOURSELF
1. What excites you about this position?

I am really excited about working on a team, learning best QA practices and creating automated tests. I attended a PDXWIT event hosted by Cambia last fall. The employees of Cambia gave a great overview of Cucumber and their QA processes. In addition, they provided an overview of the dynamic changes Cambia has been through overhauling their QA practices. The company appears to place a high value on quality. I am looking forward to learning and contributing within this environment.  

2. Why do you want to work as SDET when you have worked as a UI/ backend engineer?

I have a background in engineering. The SDET role really suits my personality and interests. I enjoy determining the logic associated with developing tests and looking for the edge cases that might cause problems. I love being part of a team and being responsible for ensuring that a good product is provided to the customer.
