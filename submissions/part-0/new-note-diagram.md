```mermaid

sequenceDiagram
  participant browser
  participant server

  browser->>server: POST https://fullstack-exampleapp.herokuapp.herokuapp.com/new_note
  activate server

  Note right of browser: The server responds with a redirect which sends a new GET request to the address defined in the headers location

  server-->server: GET /notes
  server-->browser: HTML document
  deactive server

```
