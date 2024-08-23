# Prisma Query Methods: `findUnique` and `findFirst`

Prisma provides two powerful methods for retrieving single records from the database: `findUnique` and `findFirst`. While both methods serve the purpose of fetching a single record, they are designed for different use cases and have distinct behaviors. 

## `findUnique`

Use the `findUnique` method when you want to retrieve a single record that matches a unique constraint or a primary key in your database. This method is ideal for situations where you know that the field you are querying by is guaranteed to be unique.

### Behavior:
- Returns the record that matches the unique constraint.
- If no record is found, it returns `null`.

### Example:
```javascript
const user = await prisma.user.findUnique({
  where: { id: 1 },
});
```

## `findFirst`

The `findFirst` method is utilized when you want to retrieve a single record that matches a non-unique constraint. This method is flexible as it allows for ordering and filtering, making it suitable for more complex queries.

### Behavior:
- Returns the first record that matches the specified criteria.
- If no record is found, it returns `null`.

### Example:
```javascript
const user = await prisma.user.findFirst({
  where: { email: 'example@example.com' },
  orderBy: { createdAt: 'desc' },
});
```

## Summary

- **Use `findUnique`** when querying by a field that is unique or a primary key.
- **Use `findFirst`** when querying by a non-unique field or when you need to apply more complex filters and ordering.
