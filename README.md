
# 📚 Dokumentasi API - BookSaver
**by Yudhistira Nanda Kumala (22081010055)**

BookSaver API digunakan untuk mengelola data user dan buku. Mendukung registrasi, login, manajemen user, serta CRUD buku.

Endpoint BookSaver : https://book-api-uts.vercel.app/

---

## 🔐 Auth Endpoints

### `POST /api/auth/register`
Mendaftarkan user baru.

**Request Body (JSON):**
```json
{
   "email": "user@example.com",
   "password": "password123"
}
```

**Response:**
```json
{
   "apiKey": "(apiKey)"
}
```

---

### `POST /api/auth/login`
Login user dan mendapatkan API Key / Token.

**Request Body (JSON):**
```json
{
   "email": "user@example.com",
   "password": "password123"
}
```

**Response:**
```json
{
   "apiKey": "(apiKey)"
}
```

---

## 👥 User Endpoints

### `GET /api/users`
Menampilkan semua user.

**Headers:**
```json
{
   "Key": "x-api-key",
   "Value": "(apiKey)"
}
```

**Response:**
```json
[
    {
        "_id": "680083728a965975b623b874",
        "email": "yudhistira@test.com",
        "password": "$2b$10$...",
        "apiKey": "(apiKey)",
        "__v": 0
    }
]
```

---

### `DELETE /api/users/:id`
Menghapus user berdasarkan ID.

**Headers:**
```json
{
   "Key": "x-api-key",
   "Value": "(apiKey)"
}
```

**Response:**
```json
{
    "message": "User berhasil dihapus",
    "deletedUser": {
        "_id": "680630a9da1a263bb0a0aaa1",
        "email": "yudis@test.com",
        "password": "$2b$10$...",
        "apiKey": "(apiKey)",
        "__v": 0
    }
}
```

---

## 📖 Book Endpoints

### `GET /api/books`
Mengambil semua data buku.

**Headers:**
```json
{
   "Key": "x-api-key",
   "Value": "(apiKey)"
}
```

**Response:**
```json
[
    {
        "_id": "680083c68a965975b623b87b",
        "title": "Laskar Frontend",
        "author": "Andrea Hirata",
        "year": 2021,
        "__v": 0
    }
]
```

---

### `POST /api/books`
Menambahkan buku baru.

**Headers:**
```json
{
   "Key": "x-api-key",
   "Value": "(apiKey)"
}
```

**Request Body:**
```json
{
  "title": "Kapal Karam",
  "author": "J.S Khairen",
  "year": 2020
}
```

**Response:**
```json
{
    "title": "Kapal Karam",
    "author": "J.S Khairen",
    "year": 2020,
    "_id": "68063120da1a263bb0a0aaaa",
    "__v": 0
}
```

---

### `PUT /api/books/:id`
Memperbarui data buku berdasarkan ID.

**Headers:**
```json
{
   "Key": "x-api-key",
   "Value": "(apiKey)"
}
```

**Request Body:**
```json
{
  "title": "Kapal Karam",
  "author": "J.S Khairen",
  "year": 2020
}
```

**Response:**
```json
{
    "title": "Kapal Karam",
    "author": "J.S Khairen",
    "year": 2020,
    "_id": "68063120da1a263bb0a0aaaa",
    "__v": 0
}
```

---

### `DELETE /api/books/:id`
Menghapus buku berdasarkan ID.

**Headers:**
```json
{
   "Key": "x-api-key",
   "Value": "(apiKey)"
}
```

**Response:**
```json
{
    "message": "Buku telah dihapus",
    "deletedBookId": "68063120da1a263bb0a0aaaa"
}
```
