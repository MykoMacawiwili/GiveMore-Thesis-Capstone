import { getAccessToken } from "@/app/utils/paypal";
import { handleResponse } from "@/app/utils/paypal";
import { NextResponse } from "next/server";
const base = "https://api-m.sandbox.paypal.com";

const captureOrder = async (orderID: any) => {
    const accessToken = await getAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}/capture`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
            // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
            // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
            // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
        },
    });

    return handleResponse(response);
};


// app.post("/api/orders/:orderID/capture", async (req, res) => {
//   try {
//     const { orderID } = req.params;
//     const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
//     res.status(httpStatusCode).json(jsonResponse);
//   } catch (error) {
//     console.error("Failed to create order:", error);
//     res.status(500).json({ error: "Failed to capture order." });
//   }
// });

export async function POST(req: Request) {
    try {
        const requestData = await req.json();
        const { orderID } = requestData.ID;
        const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
        return NextResponse.json(jsonResponse, {status: httpStatusCode});
    } catch (error) {
        console.error("Failed to create order:", error);
        return NextResponse.json({ error: "Failed to capture order." }, {status: 500})
    }
}