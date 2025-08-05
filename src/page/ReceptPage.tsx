'use client'

import {Mix} from "ui-hookapedia";
import {Recipe} from "@/types/recipe";

export const ReceptPage = ({recipe}: { recipe: Recipe }) => {
    return <Mix recipe={recipe}/>
}
