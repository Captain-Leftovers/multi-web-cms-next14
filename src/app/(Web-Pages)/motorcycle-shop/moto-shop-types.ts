import { MotoItem, MotoItemImages } from "@prisma/client"



export type MotoItemImagesType = MotoItemImages


export type MotoItemWithImagesType = MotoItem & {images: MotoItemImages[]}