import request from "supertest";
import app from "../src/app.js";
import mongoose from "mongoose";
import { connectDB } from "../src/db.js";

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

// Test healthcheck
test("GET /health should return ok:true", async () => {
  const res = await request(app).get("/health");
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ ok: true });
});

// Test GET items
test("GET /api/items should return array", async () => {
  const res = await request(app).get("/api/items");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

// Test POST item
test("POST /api/items should create item", async () => {
  const res = await request(app)
    .post("/api/items")
    .send({ name: "Test Item", note: "From test" });
  expect(res.statusCode).toBe(201);
  expect(res.body.name).toBe("Test Item");
});
