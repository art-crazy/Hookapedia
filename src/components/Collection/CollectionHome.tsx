'use client'

import {Collection, COLLECTION_TYPES} from "@/types/collections";
import {DefaultCollection} from "./DefaultCollection";
import {FeaturedCollection} from "./FeaturedCollection";

export const CollectionHome = ({collection}: { collection: Collection }) => {
    return (
        collection.type === COLLECTION_TYPES.FEATURED ? (
            <FeaturedCollection key={collection.title} collection={collection} />
        ) : (
            <DefaultCollection key={collection.title} collection={collection} />
        )
    )
}
