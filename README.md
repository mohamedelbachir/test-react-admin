# **test-react-admin**

## **📌 Installation**

To get started, install the project dependencies:

```bash
npm install
```

Next, install dependencies for the `client` subdirectory:

```bash
cd client
npm install
```

---

## **🚀 Running the Development Server**

To start the application in development mode:

### **If you're inside the `client` folder:**

First, move back to the root directory:

```bash
cd ..
npm run dev
```

### **If you're already in the root directory:**

Simply run:

```bash
npm run dev
```

---

## **🔐 Admin Credentials**

You can log in using the following credentials:

- **Username**: `admin`
- **Password**: `admin`

---

## **🌍 Local Preview**

Once the development server is running, open your browser and visit:

```
http://localhost:5173
```

This will load the frontend application.

---

## **🌍 Local Server Preview (MockApi)**

Available resources for mock API:

- **Users**: `http://localhost:5000/users`
- **Posts**: `http://localhost:5000/posts`

---

## **📦 Data Provider**

This project uses [ra-data-json-server](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server) as the data provider.

### **Default Configuration**

By default, the project is configured to use `json-server` with the `db.json` file as a mock backend.

If you need to connect to a different backend, you can update the configuration accordingly.
