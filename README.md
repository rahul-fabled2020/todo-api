# Todo API

- `URL`

    /api

- `Method`

    GET: /api/users

    GET: /api/todos
    

    GET: /api/users/:id

    GET: /api/todos/:id

    POST: /api/users

    POST: /api/todos

    PUT: /api/users/:id

    PUT: /api/todos/:id

    DELETE: /api/users/:id

    DELETE: /api/todos/:id

- `URL Params`

    **Required:**
      id=[integer]

- `Data Params`

    headers: 
    ```javascript
     {
      'Content-Type': 'application/json',
      Authorization: token
    }
    ```
    for POST: /api/users and PUT: /api/users/:id

    body: 
    ```javascript
    {
      "firstname": "value",
      "lastname": "value",
      "username": "value",
      "password": "value",
      "email": "value"
    }
    ```
    for POST: /api/todos and PUT: /api/todos/:id

    body:
    ```javascript
      {
      "title": "value",
      "description": "value",
      "iscompleted": "false" (optional)
    }
    ```
- Success Response:

  for GET /api/users

    Code: 200

    Content: 
    ```javascript
     {data: [
      {
        "id": value,
        "firstname": "value",
        "lastname": "value",
        "username": "value",
        "password": "value",
        "email": "value",
        "role": "value",
        "created_at": "value",
        "updated_at: "value"
      },
      {
        ...
      }
    ]}
    ```

  for GET /api/users/:id, PUT /api/users/:id, POST /api/users

    Code: 200

    Content: 
    ```javascript
     {
      "data": {
        "id": value,
        "firstname": "value",
        "lastname": "value",
        "username": "value",
        "password": "value",
        "email": "value",
        "role": "value",
        "created_at": "value",
        "updated_at: "value"        
      }
    }
    ```
  for GET /api/todos

    Code: 200

    Content: 
    ```javascript
     {
      data: [
        {
          "id": 3,
          "title": "Eat on time",
          "description": "I need to eat on time.",
          "user_id": 2,
          "created_at": "2020-08-17T20:26:23.001Z",
          "updated_at": "2020-08-17T20:26:23.001Z",
          "isCompleted": false
        },
        {
          ...
        }

      ]
    }
    ```

  for GET /api/todos/:id, PUT /api/todos/:id, POST /api/todos

    Code: 200

    Content: 
    ```javascript
     {
      "data": {
        "id": 3,
        "title": "Eat on time",
        "description": "I need to eat on time.",
        "user_id": 2,
        "created_at": "2020-08-17T20:26:23.001Z",
        "updated_at": "2020-08-17T20:26:23.001Z",
        "isCompleted": false
      }      
    }
    ```
  
  for DELTE /api/users/:id, DELETE /api/todos/:id

    Code: 204

    Content: {}

- Error Response

    Example
    
    ```javascript
    {
      "error": {
          "code": 404,
          "message": "The user doesn't exist."
      }
    }
    ```