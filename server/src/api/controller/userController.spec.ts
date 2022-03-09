import resetDatabase from "./utility/resetDatabase"


describe("userController test", () => {
  beforeEach(async () => {
    await resetDatabase()
  })
})