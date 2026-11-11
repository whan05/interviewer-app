const palettes = [
  {
    bg: 'radial-gradient(circle at 85% 75%, #1565C0 0%, #0D3875 35%, #051838 75%, #020B1C 100%)',
    watermark: 'rgba(100, 181, 246, 0.12)',
    modeColor: '#64B5F6',
    glow: 'rgba(21, 101, 192, 0.45)'
  },
  {
    bg: 'radial-gradient(circle at 80% 80%, #00897B 0%, #004D40 35%, #02231E 75%, #01110E 100%)',
    watermark: 'rgba(77, 182, 172, 0.13)',
    modeColor: '#4DB6AC',
    glow: 'rgba(0, 137, 123, 0.45)'
  },
  {
    bg: 'radial-gradient(circle at 85% 75%, #6A1B9A 0%, #4A148C 35%, #250949 75%, #100322 100%)',
    watermark: 'rgba(186, 104, 200, 0.13)',
    modeColor: '#CE93D8',
    glow: 'rgba(106, 27, 154, 0.45)'
  },
  {
    bg: 'radial-gradient(circle at 80% 80%, #C2185B 0%, #880E4F 35%, #420424 75%, #1E0110 100%)',
    watermark: 'rgba(240, 98, 146, 0.13)',
    modeColor: '#F48FB1',
    glow: 'rgba(194, 24, 91, 0.45)'
  },
  {
    bg: 'radial-gradient(circle at 75% 70%, #E65100 0%, #BF360C 35%, #561603 75%, #260900 100%)',
    watermark: 'rgba(255, 171, 145, 0.13)',
    modeColor: '#FFAB91',
    glow: 'rgba(230, 81, 0, 0.45)'
  },
  {
    bg: 'radial-gradient(circle at 85% 75%, #0097A7 0%, #006064 35%, #002D33 75%, #001518 100%)',
    watermark: 'rgba(77, 208, 225, 0.13)',
    modeColor: '#4DD0E1',
    glow: 'rgba(0, 151, 167, 0.45)'
  },
  {
    bg: 'radial-gradient(circle at 80% 80%, #AD1457 0%, #6A1B9A 35%, #350849 75%, #160220 100%)',
    watermark: 'rgba(244, 143, 177, 0.13)',
    modeColor: '#F48FB1',
    glow: 'rgba(173, 20, 87, 0.45)'
  },
  {
    bg: 'radial-gradient(circle at 75% 70%, #8D6E63 0%, #4E342E 35%, #261612 75%, #120A08 100%)',
    watermark: 'rgba(215, 204, 200, 0.13)',
    modeColor: '#D7CCC8',
    glow: 'rgba(141, 110, 99, 0.45)'
  }
];

const cards = [
  {
    pregunta: "Tell me about yourself and your background in full-stack development.",
    respuesta: "Certainly! I am Whanderley, a Full-Stack Developer based in Costa Rica with over five years of professional experience building web and mobile applications. Currently, at Bee Loyal Card, I handle end-to-end development across the stack using React, TypeScript, Node.js, and NestJS, backed by PostgreSQL and MySQL databases. My daily responsibilities involve designing RESTful APIs, building backend business logic for customer reward parameters, and managing containerized deployments with Docker and AWS. Before my current role, I developed frontend web applications at Globant and Accenture, where I maintained an 80% automated unit test coverage using Jest and React Testing Library and focused on code quality and security. Interestingly, my software engineering journey began in technical support and SQL database administration at Logosoft in 2018. That foundation in root-cause debugging, log analysis, and system troubleshooting makes me a far more resilient full-stack engineer today. Moving forward, I am eager to bring this combination of robust development, data-driven engineering, and practical problem-solving to IBM Consulting."
  },
  {
    pregunta: "Why are you interested in joining IBM Consulting, and how does your background fit a client-facing role?",
    respuesta: "I am drawn to IBM Consulting because of its strong focus on long-term client relationships, digital transformation, and leveraging enterprise platforms like Snowflake and cloud infrastructure to drive business impact. Throughout my career, especially in my freelance work and client project implementations at Accenture and Beta Tech, I have worked directly with business stakeholders to translate complex requirements into clean technical deliverables. My background combines deep technical execution in full-stack development with a customer-support mindset developed at Logosoft. This dual perspective allows me to communicate technical trade-offs clearly to clients while ensuring software reliability and performance."
  },
  {
    pregunta: "How do you participate in Agile delivery workflows, such as Scrum or Kanban?",
    respuesta: "In my roles at Bee Loyal Card and Globant, we operated strictly under Scrum frameworks. I participate actively in daily stand-ups to share progress and flag blockers early. During sprint planning, I collaborate with product managers and senior engineers to break down user stories into technical tasks and estimate effort accurately. In retrospectives, I focus on continuous improvement—whether that means refining our testing pipelines or optimizing developer documentation. Furthermore, I use tools like Jira and Git workflows to keep sprint boards updated and ensure transparent delivery."
  },
  {
    pregunta: "Describe a situation where you had to collaborate with non-technical stakeholders to clarify ambiguous requirements.",
    respuesta: "Situation: At Bee Loyal Card, commercial stakeholders requested an automated loyalty rewards interface, but the underlying business rules and calculation parameters lacked technical specifications. Task: I needed to bridge commercial requirements and technical implementation to ensure clear backend API boundaries without rework. Action: I organized discovery workshops where I mapped user flows with wireframes and simplified diagrams, translating their business targets into concrete NestJS DTO validation rules and domain logic parameters. Result: We delivered the feature on schedule with zero rework, demonstrating how proactive alignment eliminates technical debt and guarantees stakeholder satisfaction."
  },
  {
    pregunta: "Can you describe a full-stack project you are particularly proud of, and your role in it?",
    respuesta: "In my previous role, a client required a dedicated customer portal to securely review account statements and transaction histories. As the full-stack developer, I owned both backend and frontend development. On the backend, using NestJS and MySQL, I implemented secure JWT authentication flows and built high-performance endpoints for dashboard metrics and date-range filtered statement queries. On the frontend, I used React, Redux, and Axios to faithfully implement the Figma design system. Following integration testing and a successful client UAT cycle, we deployed to production. To track business impact, I added onboarding analytics, which confirmed rapid user adoption and significantly reduced manual balance-inquiry support requests."
  },
  {
    pregunta: "How do you approach code reviews and maintain clean, maintainable code across a software development team?",
    respuesta: "I believe code reviews are a collaborative tool for quality assurance and knowledge sharing. When reviewing pull requests, I check for readability, adherence to SOLID principles, proper error handling, and test coverage. At Globant, we integrated Sonar for static code analysis to catch vulnerabilities and maintainability smells automatically. In my current workflow at Bee Loyal Card, I ensure that backend NestJS DTOs and React components are modular and well-documented. I always provide constructive feedback focused on code improvement rather than personal preference."
  },
  {
    pregunta: "How do you structure a scalable React and TypeScript application for enterprise environments?",
    respuesta: "To build a scalable React application, I adopt a feature-based folder structure rather than grouping strictly by file type. I separate UI presentation from business logic by utilizing custom hooks for API calls and state management. TypeScript plays a crucial role: I define strict interfaces and types for API responses, component props, and global state to catch errors at compile time. At Bee Loyal Card, this modular approach allows us to build reusable form controls, dynamic dashboards, and consistent UI components that can be maintained efficiently across the team."
  },
  {
    pregunta: "How do you manage state across complex full-stack web applications?",
    respuesta: "My strategy depends on the scope of the state. For local component state, I use React's useState and useReducer. For global application state—such as user authentication sessions or multi-step checkout flows—I have utilized Redux and Zustand. At Globant and Bee Loyal Card, I also emphasize separating server state from client state by leveraging asynchronous data-fetching patterns, ensuring that cached server responses do not unnecessarily clutter the global client store."
  },
  {
    pregunta: "What is your approach to automated frontend testing, and how do you ensure high software reliability?",
    respuesta: "I treat testing as an integral part of the development cycle. At Globant, I maintained approximately 80% automated unit test coverage using Jest and React Testing Library. I focus on testing component behavior from the user's perspective rather than implementation details—verifying form submissions, button interactions, and state renders. Additionally, I have working experience with end-to-end testing tools like Cypress, WebdriverIO, and Playwright to validate critical user journeys before production releases."
  },
  {
    pregunta: "How do you inspect and optimize web application performance and UI rendering?",
    respuesta: "I start performance profiling using Chrome DevTools—analyzing the Performance tab, Network requests, and Lighthouse audits. To optimize rendering in React, I prevent unnecessary re-renders using React.memo, useMemo, and useCallback where appropriate. I also implement code-splitting and dynamic imports via React lazy and Suspense to reduce initial bundle sizes. Drawing from my support background at Logosoft, I also analyze waterfall charts to catch slow API calls and asset loading bottlenecks."
  },
  {
    pregunta: "Can you explain the differences between Client-Side Rendering (CSR) and Server-Side Rendering (SSR) in Next.js?",
    respuesta: "Client-Side Rendering (CSR) renders the HTML in the browser via JavaScript, which works great for interactive dashboards behind authentication, but can slow down initial page loads. Server-Side Rendering (SSR) in Next.js pre-renders HTML on the server for each request, delivering faster initial loads and superior SEO performance. Throughout my projects with React and Next.js, I select SSR when dynamic SEO and fast first-contentful-paint are required, whereas CSR is chosen for internal operational tools with heavy client-side state interactions."
  },
  {
    pregunta: "How do you design and implement scalable RESTful APIs using NestJS and Node.js?",
    respuesta: "When designing RESTful APIs in NestJS, I strictly follow object-oriented design and modular architecture. I use Controllers to handle HTTP request routing, Data Transfer Objects (DTOs) with class-validator pipes to sanitize incoming payloads, and Services to encapsulate core business logic. NestJS's built-in dependency injection makes services highly testable and loosely coupled. I also adhere to standard REST conventions—using correct HTTP verbs (GET, POST, PUT, DELETE), consistent URL resource paths, and standard HTTP status codes."
  },
  {
    pregunta: "How do you handle backend business logic and complex parameter calculations?",
    respuesta: "At Bee Loyal Card, a major part of my backend role involves developing calculations and dynamic parameters to determine customer rewards based on purchasing behavior. I structure these rules inside dedicated domain service classes in NestJS. I isolate the pricing and point-calculation formulas from database access methods. This separation ensures that business logic can be unit-tested independently with Jest, ensuring accurate financial and reward computations before data is persisted to PostgreSQL or MySQL."
  },
  {
    pregunta: "How do you implement authentication, authorization, and basic application security in web APIs?",
    respuesta: "Security must be embedded into every layer of the backend. For API authentication, I implement JSON Web Tokens (JWT) combined with NestJS Guards to secure protected endpoints. For authorization, I enforce Role-Based Access Control (RBAC) to ensure users only access resource actions allowed by their role. Furthermore, I sanitize database queries using ORMs or parameterized SQL to prevent SQL injection, enforce CORS policies, and use HTTPS for transport encryption."
  },
  {
    pregunta: "What strategies do you use for backend error handling, logging, and production incident resolution?",
    respuesta: "In NestJS, I implement global Exception Filters to catch unhandled errors and return standardized HTTP error responses to the client, preventing raw stack traces from leaking. For logging, I structure log messages with timestamps, correlation IDs, and context details. Having spent over three years in technical support at Logosoft, I approach incident resolution systematically: inspecting application logs, replicating request conditions in Postman, checking database connections, and isolating the error to the API, network, or database layer."
  },
  {
    pregunta: "How do you manage third-party API integrations and asynchronous data processing?",
    respuesta: "When integrating third-party APIs or processing webhooks—such as digital wallet passes at Bee Loyal Card—I build abstraction services that handle HTTP communication using NestJS HttpModule or Axios. I implement retry logic and timeout handling to safeguard against third-party downtime. Incoming payloads are validated against interfaces, transformed into internal data structures, and processed asynchronously. I also write comprehensive unit and integration tests using Postman and Jest to mock external API responses."
  },
  {
    pregunta: "How do you approach relational database schema design and normalization?",
    respuesta: "I approach relational database design by first analyzing entity relationships and access requirements. I apply normalization principles (up to Third Normal Form) to eliminate data redundancy and ensure data integrity through foreign key constraints, primary keys, and non-null checks. In my work across PostgreSQL, MySQL, and SQL Server at Bee Loyal Card and Logosoft, I also consider pragmatic indexing strategies on frequently queried fields to ensure fast read performance without compromising write throughput."
  },
  {
    pregunta: "How do you write and optimize complex SQL queries for operational data workflows?",
    respuesta: "Writing efficient SQL is one of my core strengths, starting from my database support background at Logosoft to building full-stack data workflows at Bee Loyal Card. When dealing with slow queries, I analyze the database execution plan (EXPLAIN ANALYZE). I optimize performance by replacing inefficient subqueries with JOINs, applying proper indexes on filtering and join columns, avoiding SELECT *, and utilizing aggregate functions efficiently. This ensures operational dashboards and analytics endpoints receive fast data access."
  },
  {
    pregunta: "Describe a situation where a client reported a data discrepancy, and how you investigated and resolved it.",
    respuesta: "Situation: At my current job, a client reported that their account statement did not reflect the correct amount of loyalty points. Task: We needed to inform users proactively, contain the issue, and rapidly patch and validate the underlying data calculation. Action: I inspected the account statement data pipeline and identified an incorrectly mapped object property. I corrected the mapping in the backend service and validated the fix in a sandbox environment by sending test statements across multiple account scenarios. Result: Once approved, we resent the corrected statements. We then held a team retrospective to analyze the root cause and implemented automated regression checks to prevent similar discrepancies."
  },
  {
    pregunta: "What is your understanding of cloud data platforms like Snowflake and their role in data-driven full-stack applications?",
    respuesta: "While traditional relational databases like PostgreSQL handle transactional processing (OLTP), cloud data platforms like Snowflake are engineered for large-scale data warehousing and analytics (OLAP). In a full-stack consulting architecture—such as those at IBM—Snowflake acts as the central data hub. Full-stack applications interact with Snowflake via specialized data drivers or REST APIs to pull aggregated analytics, operational metrics, and reporting data into client dashboards. Understanding column-oriented storage, data staging, and efficient query access patterns allows full-stack developers to build responsive data-centric applications."
  },
  {
    pregunta: "How do you maintain data quality, data integrity, and basic governance in application data workflows?",
    respuesta: "Maintaining data quality starts at the ingestion point. In NestJS APIs, I enforce validation pipes using class-validator to guarantee that incoming payloads meet strict type and format criteria before reaching the database. At the database level, I rely on schema constraints (CHECK, UNIQUE, NOT NULL) and database transactions (BEGIN/COMMIT/ROLLBACK) to prevent partial data writes. In data-centric applications, these practices ensure clean data lineage, consistency, and compliance with data quality standards."
  },
  {
    pregunta: "Can you explain client-server architecture and key HTTP protocol fundamentals?",
    respuesta: "Client-server architecture separates the user interface layer from the data management and business logic layer. The client initiates HTTP requests, and the server processes them over TCP/IP. Key HTTP fundamentals include request methods—GET for retrieval, POST for creation, PUT/PATCH for updates, DELETE for removal—and status codes, such as 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, and 500 Internal Server Error. Understanding request headers, CORS, and statelessness is fundamental for troubleshooting web integration issues."
  },
  {
    pregunta: "How do you utilize Docker containers in your software development and deployment workflows?",
    respuesta: "At Bee Loyal Card, I use Docker to containerize our Node.js/NestJS backend services and frontend web applications. Docker ensures environment parity between local development, testing, and cloud environments. I write multi-stage Dockerfiles to keep production image sizes small and secure. Using docker-compose, I spin up local development environments that include the application service, PostgreSQL database, and Redis instances with a single command, streamlining setup and debugging."
  },
  {
    pregunta: "What experience do you have with cloud platforms such as AWS and CI/CD pipelines?",
    respuesta: "In my full-stack engineering work, I deploy and support applications hosted on AWS infrastructure, using services like EC2, S3 for static frontend assets, and containerized deployment environments. I am familiar with CI/CD workflows using GitHub Actions: whenever code is merged into the main branch, automated pipelines run our Jest test suites, execute static code checks, build Docker images, and trigger deployments to staging or production environments."
  },
  {
    pregunta: "How do you approach root-cause analysis when a critical incident occurs across the application stack?",
    respuesta: "When a production incident arises, my first priority is containment and clear communication, followed by systematic root-cause analysis. Drawing from my three-plus years in SLA-driven technical support at Logosoft and handling production releases at Bee Loyal Card, I follow a step-by-step diagnostic process: 1. Symptom Verification: Inspect client-side console logs and HTTP response status using browser DevTools. 2. Backend Log Tracing: Check server application logs and Docker container streams for unhandled exceptions or connection timeouts. 3. Database Audit: Run diagnostic SQL queries to inspect table locks, query performance, or data corruption. Once identified, I implement the fix, add automated regression tests, and write a technical incident summary to prevent future occurrences."
  },
  {
    pregunta: "How do you leverage AI-assisted tools like Claude Code and ChatGPT Codex in your software engineering workflow?",
    respuesta: "I actively integrate AI-assisted development tools—such as Claude Code and ChatGPT Codex—into my daily workflow at Bee Loyal Card to enhance developer productivity while maintaining strict code quality. I use AI to rapidly generate boilerplate code, draft initial Jest unit tests, write complex regular expressions, and assist in refactoring legacy functions. However, I treat AI outputs as initial drafts: I thoroughly review, test, and sanitize all generated code to ensure it complies with security standards, company architecture, and performance requirements."
  },
  // --- JAVASCRIPT TECHNICAL QUESTIONS ---
  {
    pregunta: "What is a closure in JavaScript, and when do you use it?",
    respuesta: "A closure is a function that retains access to variables from its outer lexical scope even after the outer function has finished executing. I use closures for data encapsulation, creating private state, function factories, and memoization helpers."
  },
  {
    pregunta: "How does the JavaScript Event Loop work?",
    respuesta: "JavaScript is single-threaded and uses the Event Loop to handle asynchronous operations without blocking the main thread. Synchronous code runs on the Call Stack first, while asynchronous callbacks are queued in the Microtask Queue for Promises or the Macrotask Queue for timers and I/O. Once the Call Stack is empty, the Event Loop processes all microtasks before moving to the next macrotask."
  },
  {
    pregunta: "What is the difference between var, let, and const?",
    respuesta: "Var is function-scoped, can be redeclared, and is hoisted with an initial value of undefined. Let and const are block-scoped and stay in the Temporal Dead Zone until declared. Let allows reassignment, whereas const prevents variable reassignment."
  },
  {
    pregunta: "Explain Promises and async/await in JavaScript.",
    respuesta: "A Promise is an object representing the eventual completion or failure of an asynchronous operation, existing in a pending, fulfilled, or rejected state. Async and await are syntactic sugar built on top of Promises that allow us to write asynchronous code that reads like synchronous code, using try and catch blocks for clean error handling."
  },
  {
    pregunta: "What is the difference between == (loose equality) and === (strict equality)?",
    respuesta: "Loose equality compares two values after performing type coercion, which can lead to unexpected results. Strict equality compares both value and data type without coercion, making it the standard best practice for predictable comparisons."
  },
  {
    pregunta: "How does the 'this' keyword behave in regular functions versus arrow functions?",
    respuesta: "In regular functions, 'this' is dynamically bound depending on how the function is called. In arrow functions, 'this' is lexically bound, meaning it inherits the 'this' value from its surrounding scope at the time it is defined."
  },
  {
    pregunta: "What is the difference between debouncing and throttling?",
    respuesta: "Debouncing delays the execution of a function until a specified time has passed since the last event, which is ideal for search input fields. Throttling ensures a function executes at most once every specified time interval, which is ideal for scroll or window resize listeners."
  },
  {
    pregunta: "What is Event Delegation in JavaScript?",
    respuesta: "Event Delegation is a pattern based on event bubbling where a single event listener is attached to a parent element instead of multiple child elements. It improves memory efficiency and automatically handles dynamically added child elements."
  },
  {
    pregunta: "What is the difference between shallow copy and deep copy in JavaScript?",
    respuesta: "A shallow copy duplicates only the top-level properties using the spread operator or Object.assign, meaning nested objects still share memory references. A deep copy recursively duplicates all nested objects using structuredClone so mutations never affect the original object."
  },
  {
    pregunta: "Explain how map, filter, and reduce work on JavaScript arrays.",
    respuesta: "All three are immutable higher-order array methods. Map transforms each element and returns a new array of the same length. Filter returns a new array containing only elements that pass a condition. Reduce accumulates all array elements into a single output value."
  },
  // --- REACT TECHNICAL QUESTIONS ---
  {
    pregunta: "What is the Virtual DOM and how does React reconciliation work?",
    respuesta: "The Virtual DOM is a lightweight in-memory representation of the real DOM. When state changes, React creates a new Virtual DOM tree, compares it with the previous one using a diffing algorithm, and updates only the specific DOM nodes that changed."
  },
  {
    pregunta: "What is the difference between props and state in React?",
    respuesta: "Props are read-only inputs passed down from a parent component to configure a child component. State is mutable data managed internally within a component using hooks like useState, and updating state triggers a component re-render."
  },
  {
    pregunta: "How does the useEffect hook work, and why is the cleanup function important?",
    respuesta: "The useEffect hook runs side effects like data fetching or subscriptions after React renders the component, controlled by its dependency array. The cleanup function runs before the effect re-runs or when the component unmounts, preventing memory leaks by clearing timers, event listeners, or active requests."
  },
  {
    pregunta: "What is the difference between useMemo and useCallback?",
    respuesta: "Both hooks optimize performance through memoization. UseMemo caches the computed result of an expensive calculation between renders, whereas useCallback caches a function reference so child components wrapped in React.memo do not re-render unnecessarily."
  },
  {
    pregunta: "Why are keys important when rendering lists in React?",
    respuesta: "Keys give each list element a stable unique identity across renders. React uses keys during reconciliation to accurately track which items were added, updated, or removed, avoiding unnecessary DOM re-creation and state bugs."
  },
  {
    pregunta: "What are Custom Hooks in React and why do you create them?",
    respuesta: "Custom Hooks are reusable JavaScript functions whose names start with 'use' and can call other React hooks. I create them to extract and share stateful logic—like API fetching, form validation, or debouncing—across multiple components while keeping UI components clean."
  },
  {
    pregunta: "What is the difference between Controlled and Uncontrolled components in React?",
    respuesta: "In a Controlled component, form input values are driven by React state and updated via onChange handlers, providing a single source of truth. In an Uncontrolled component, form data is managed by the DOM itself and accessed when needed using a useRef hook."
  },
  {
    pregunta: "What is Prop Drilling and how do you avoid it?",
    respuesta: "Prop Drilling happens when data is passed through multiple layers of intermediate components that do not need it just to reach a deeply nested child. I avoid it by using the React Context API, component composition, or global state libraries like Zustand or Redux."
  },
  {
    pregunta: "How do you use the useRef hook in React?",
    respuesta: "The useRef hook returns a mutable ref object whose current property persists across renders. It has two main uses: accessing DOM elements directly—such as focusing an input—and storing mutable values like timer IDs without triggering a re-render when updated."
  },
  {
    pregunta: "What are Error Boundaries in React?",
    respuesta: "Error Boundaries are components that catch JavaScript errors anywhere in their child component tree during rendering, log those errors, and display a fallback UI instead of crashing the entire application."
  }
];
