TOOLS
1. In your opinion, what’s helpful about version control systems? What’s annoying about them?

Version control has multiple advantages. It allows multiple users to check out the code, work on it and merge it back in. It enables people to determine what code is in production vs development vs testing. If code is not working in a new revision, it is easy to compare the differences between the old and new versions to help troubleshoot where the problem might lay. 
I use Github for version control and the only thing that I find annoying is difficulty adding images to wikis. One picture can often explain things better than words and I wish it was easier to insert images.

2. What are some pros and cons of using Docker to develop, test, and deploy software?

Docker pros -
a. No inconsistencies between computers. It works the same for everyone which is especially useful so that development and QA are experiencing identical behaviors. 
b. You can have multiple projects running and can keep them separate.
c. It just works. You don’t have to install tools and dependencies.
d. It can start up in seconds.
Docker cons - 
a. Security may be an issue. Hackers are targeting containers.
b. It has a high learning curve.
c. Its documentation has some weaknesses.

3. How do you choose which language to use for a given task? How did you choose the language for the programming exercise above? 

Each language has pros and cons. The needs of the business, the capability and accessibility of people that know the chosen language should be part of the consideration when choosing which language to use. For example, if you need to perform precise calculations, you would not choose javascript but perhaps python. Some languages perform better for scripts or automations while others are better for large desktop applications. I think the most important thing is that you consider what is best for the business and for your team.

I chose javascript for the exercise because that is the language I first learned and am most comfortable with at this time.

TESTING METHODOLOGY
1. What’s the right role for QA in the software development process?

I personally like the idea put forth in a blog post by Kevin Cruden. "QA brings to the project, the mindset of "Are we building the correct product and, if so, are we building it correctly?"." QA looks at the bigger picture to ensure that , not only does the software work, but does it work like the business or the customer expects it to work. I think QA should be involved in all phases of software from developing user stories through implementation.

2. As a QA person, you have 2 weeks to prepare before your team starts writing software. What do you do? 

I would ensure that I knew all of the requirements, user stories, and expectations. I may start writing validation tests as I learned more information. If we were adding software requirements that were new, I may spend time learning about new technologies. 

3. When is it appropriate to use automated testing? When is it appropriate to use manual testing? 

Automated testing is useful when -
  a. the same execution will be repeated often
  b. testing does not require human consideration of user friendliness
  c. using for load testing or performance testing
  d. the setup time is less than the amount of time for manual testing
  e. reliability is essential. There is no human test fatigue.

Manual testing is useful when - 
  a. evaluating the software for user friendliness or design considerations
  b. only a few tests need to be performed
  c. random tests need to occur
  d. the tester has no programming knowledge

4. Your dev team has just modified an existing product by adding new features and refactoring the code for old features. The devs claim to have written unit tests; you’re in charge of integration testing. Dedicated teams are handling performance and security testing, so you don’t have to. As is always the case in the real world, you don’t have time to test everything. What factors do you think about as you decide where to focus your testing efforts? How do you decide what not to test?

Factors that would impact safety, critical requirements and user satisfaction would be my first choices for evaluation. With regards to safety, I currently work with software that provides recommendations of doses for injections. I consider that my top priority for testing since a wrong result can impact a person's health. Key criticial requirements would be my second consideration. Are there calculations that would impact the user so greatly that it would cause major negative consequences - prices are given incorrectly, calculations are wrong, information is incorrect. Then I would look at the user experience. Does the software take long to load? Does the site freeze and need refreshing? Can I navigate properly. I would look for issues that would cause the user to give up on the software quickly.

ABOUT YOURSELF
1. What excites you about this position?

I am really excited about working on a team, learning best QA practices and creating automated tests.

2. Why do you want to work as SDET when you have worked as a UI/ backend engineer?

I have a background in engineering. The SDET role really suits my personality and interests. I enjoy determining the logic associated with developing tests and looking for the edge cases that might cause problems. I love being part of a team and being responsible for ensuring a good product is provided to the customer.
