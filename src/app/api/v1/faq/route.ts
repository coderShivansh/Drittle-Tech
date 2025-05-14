import httpStatus from "http-status";
import { NextResponse } from "next/server";
import * as routes from "./routes";
import {
  createFaqSchema,
  updateFaqSchema,
} from "../../validators/faq.validator";
import type {
  CreateFaqDto,
  UpdateFaqDto,
} from "../../validators/faq.validator";
import { ZodError } from "zod";
import { authorize } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const authError = authorize(req);
    if (authError) return authError;

    const body = await req.json();

    const validatedData: CreateFaqDto = createFaqSchema.parse(body);

    const newTestimonial = await routes.create(validatedData);

    return NextResponse.json(newTestimonial, { status: httpStatus.CREATED });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: httpStatus.BAD_REQUEST }
      );
    }

    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { error: errorMessage },
      { status: httpStatus.BAD_REQUEST }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const testimonial = await routes.get(id);

      if (!testimonial) {
        return NextResponse.json(
          { error: "Faq not found" },
          { status: httpStatus.NOT_FOUND }
        );
      }

      return NextResponse.json(testimonial);
    }

    const testimonials = await routes.getAll();
    return NextResponse.json(testimonials);
  } catch (error) {
    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { error: errorMessage },
      { status: httpStatus.BAD_REQUEST }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const authError = authorize(req);
    if (authError) return authError;

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Faq ID is required" },
        { status: httpStatus.BAD_REQUEST }
      );
    }

    const body = await req.json();

    const validatedData: UpdateFaqDto = updateFaqSchema.parse(body);

    const updatedTestimonial = await routes.update(id, validatedData);

    if (!updatedTestimonial) {
      return NextResponse.json(
        { error: "Faq not found" },
        { status: httpStatus.NOT_FOUND }
      );
    }

    return NextResponse.json(updatedTestimonial);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: httpStatus.BAD_REQUEST }
      );
    }

    const errorMessage = (error as Error).message;
    return NextResponse.json(
      { error: errorMessage },
      { status: httpStatus.BAD_REQUEST }
    );
  }
}

export async function DELETE(req: Request) {
  const authError = authorize(req);
  if (authError) return authError;

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Faq ID is required" },
      { status: httpStatus.BAD_REQUEST }
    );
  }

  const deletedTestimonial = await routes.remove(id);

  if (!deletedTestimonial) {
    return NextResponse.json(
      { error: "Faq not found" },
      { status: httpStatus.NOT_FOUND }
    );
  }

  return NextResponse.json(deletedTestimonial);
}
