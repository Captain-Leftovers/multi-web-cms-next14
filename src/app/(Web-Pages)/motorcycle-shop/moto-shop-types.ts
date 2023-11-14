import { MotoItem, MotoItemImages } from "@prisma/client"




export type MotoItemWithImagesType = MotoItem & {images: MotoItemImages[]}