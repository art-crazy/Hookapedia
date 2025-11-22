'use client'

import {Mix} from "@/page/mix";
import {Recipe} from "@/types/recipe";

export const ReceptPage = ({recipe}: { recipe: Recipe }) => {
    return <Mix recipe={recipe}/>
}
