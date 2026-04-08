import { NextRequest, NextResponse } from "next/server";
import { todos } from "../data";
import { error } from "console";

type Params = {params:{id:string}}

 export async function GET(_:NextRequest,{params}:Params){
    const todo = todos.find(t=>t.id === +params.id)
    if(!todo){
        return NextResponse.json(
            {error:'tapılmadı'},
            {status:404}
        )
    }
    return NextResponse.json(todo)
 }

 export async function PUT(request:NextRequest,{params}:Params) {
    const body = await request.json()
    const idx = todos.findIndex(t=>t.id === +params.id)

    if(idx === -1){
        return NextResponse.json(
            {error:'Tapılmadı'},
            {status:404}
        )
    }
todos[idx] = {...todos[idx], ...body}

return NextResponse.json(todos[idx])
    
 }


 export async function DELETE(_:NextRequest,{params}:Params) {
    const idx = todos.findIndex(t=>t.id === +params.id)
    if(idx === -1){
        return NextResponse.json(
            {error:'Tapılmadı'},
            {status:404}
        )
    }
    const deleted = todos.splice(idx,1)[0]
    return  NextResponse.json({success:true, deleted})
 }