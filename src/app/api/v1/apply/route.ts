import { NextResponse } from "next/server";
import { upload } from "@/lib/upload";
import httpStatus from "http-status";

export async function POST(req: Request): Promise<Response> {
  return new Promise((resolve) => {
    upload.single("resume")(req as any, {} as any, (error: any) => {
      if (error) {
        console.log("Multer Error:", error.message);
        resolve(
          NextResponse.json(
            { error: error.message },
            { status: httpStatus.BAD_REQUEST }
          )
        );
      }

      // File received from the request
      const file = (req as any).file;
      console.log("File received:", file);

      if (!file) {
        console.log("No file uploaded");
        resolve(
          NextResponse.json(
            { error: "No file uploaded" },
            { status: httpStatus.BAD_REQUEST }
          )
        );
      }

      resolve(
        NextResponse.json(
          { message: "Resume uploaded successfully", filePath: file.path },
          { status: httpStatus.OK }
        )
      );
    });
  });
}
