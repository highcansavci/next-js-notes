import {NextResponse} from "next/server";

export function name(_, response) {
    const { id } = response.params
    return NextResponse.json({result: id});
}