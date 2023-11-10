# Reproduction

1. npx --no-install @cloudflare/next-on-pages
1. npx wrangler d1 execute todos --local --file schema.sql
1. npx wrangler pages dev .vercel/output/static --compatibility-flag=nodejs_compat
1. go to http://localhost:8788
1. try to create a todo using the form

Note that the Link for /other on /app/page.js preloads that page

# Interesting Behaviours

Comment out the link to /other in /app/page.js -- the createTodo server action works. Now, manually go to http://localhost:8788/other, and then come back to http://localhost:8788. Try to create another todo.
