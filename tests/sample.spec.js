const{test,expect}=require('@playwright/test')

test("My first test", async function({page})
{
    expect(1).toBe(1)
})
test("My second test", async function({page})
{
    expect(100).toBe(100)
})
test("My third test", async function({page})
{
    expect(2.0).toBe(2.0)
})
test.skip("My fourth test", async function({page})
{
    expect("Nikhil Khandelwal").toContain("Nikhil")
    expect(false).toBetruthy()
})
test("My fifth test", async function({page})
{
    expect(false).toBeFalsy()
})