# **test-react-admin**

## **📌 Installation**

First, install the application dependencies:

```sh
npm install
```

Then, install dependencies for the `client` subdirectory:

```sh
cd client
npm install
```

---

## **🚀 Running the Development Server**

To start the application in development mode:

### **If you're inside the `client` folder:**

Move back to the root directory first:

```sh
cd ..
npm run dev
```

### **If you're already in the root directory:**

Simply run:

```sh
npm run dev
```

---

## **🌍 Local Preview**

Once the development server is running, open your browser and visit:

```
http://localhost:5173
```

This will load the frontend application.

---

## **📦 Data Provider**

This project uses [ra-data-json-server](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server) as the data provider.

You'll find an **`.env`** file in the `client` directory containing the `VITE_JSON_SERVER_URL` variable.

### **Default Configuration**

By default, the project is configured to use `json-server` with the file `db.json` as the mock backend.
