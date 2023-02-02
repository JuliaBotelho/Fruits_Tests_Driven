import { FruitInput } from "services/fruits-service"
import supertest from "supertest"
import app from "index"

describe("fruit tests", () => {

    it("should complete the input of a valid fruit", async () => {
        const body: FruitInput = {
            name: "banana",
            price: 20
        }

        const result = await supertest(app).post("/fruits").send(body);
        const status = result.statusCode;

        expect(status).toBe(201);
    })

    it("the same fruit shouldn't be created twice", async () => {
        const body: FruitInput = {
            name: "banana",
            price: 10
        }

        const result = await supertest(app).post("/fruits").send(body);

        const status = result.statusCode;

        expect(result.text).toBe('Conflict');
        expect(status).toBe(409);
    })

    it("an invalid input shouldn't pass the schema validation", async () => {
        const body = {
            name: "apple",
            price: 50,
            model: "hb20"
        }

        const result = await supertest(app).post("/fruits").send(body);

        const status = result.statusCode;

        expect(status).toBe(422);
    })

    it("all fruits should be fetched", async () => {

        const result = await supertest(app).get("/fruits");
        const status = result.statusCode;
        const response = result.body;

        expect(response).toEqual(
            expect.arrayContaining([
                {
                    name: expect.any(String),
                    price: expect.any(Number),
                    id: expect.any(Number)
                }
            ])
        )
        expect(status).toBeGreaterThanOrEqual(200);
    })

    it("specific fruit should be fetched by id", async () => {

        const result = await supertest(app).get("/fruits/1");
        const status = result.statusCode;
        const response = result.body;

        expect(response).toEqual(
            expect.objectContaining({

                name: expect.any(String),
                price: expect.any(Number),
                id: expect.any(Number)

            })
        )
        expect(status).toBeGreaterThanOrEqual(200);
    })

    it("specific fruit should not be fetched by id if it doesn't exists", async () => {

        const result = await supertest(app).get("/fruits/3");

        
        expect(result.text).toBe('Not Found');
    })
})