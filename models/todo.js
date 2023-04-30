const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        desc: {
            type: String,
            required: true,
            trim: true,
        },
        code: {
            type: String,
        },
        image1: {
            type: String,
            required: true,
            unique: true,
        },
        image2: {
            type: String,
        },
        image3: {
            type: String,
        },
        image4: {
            type: String,
        },

        image5: {
            type: String,
        },
        image6: {
            type: String,
        },
        logo: {
            type: String,
        },
        count: {
            type: Number,
            required: false,
            default: 1,
        },
        category1: {
            type: String,
            required: true,
            trim: true,
        },
        category2: {
            type: String,
            required: true,
            trim: true,
        },
        category3: {
            type: String,
            required: true,
            trim: true,
        },
        price1: {
            type: Number,
        },
        price2: {
            type: Number,
        },
        price3: {
            type: Number,
        },
        month: {
            type: Number,
        },
        guarantee: {
            type: String,
        },
        color: {
            type: String,
        },
        manufacturer: {
            type: String,
            default: "Узбекистан",
        },
        storage1: {
            type: String,
            default: "128 ГБ",
        },
        storage2: {
            type: String,
        },
        ram1: {
            type: String,
            default: "6 ГБ",
        },
        ram2: {
            type: String,
        },
        vibration: {
            type: String,
            default: "есть",
        },
        sim_cards: {
            type: String,
            default: "2",
        },
        material: {
            type: String,
            default: "Пластик",
        },
        sistemi: {
            type: String,
            default: "Android 12",
        },
        protection: {
            type: String,
            default: "IP67",
        },
        sim_typ: {
            type: String,
            default: "Nano-SIM",
        },
        brend: {
            type: String,
        }
    },
    { timestamps: true }
); //qacon sozdat qilinga date ni korsatadi

module.exports = mongoose.model("Todo", todoSchema);



// desc_bottom: {
//     type: String,
// },
// color: {
//     type: String,
// },
// cpu: {
//     type: String,
// },
// video_processor: {
//     type: String,
// },
// cores_processor: {
//     type: String,
// },
// screen_features: {
//     type: String,
// },
