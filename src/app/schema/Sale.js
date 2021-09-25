import mongoose from 'mongoose'

const SaleSchema = new mongoose.Schema(
  {
    customer: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        country: {
          id: {
            type: Number,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
        },
        postal_code: {
          type: String,
          required: true,
        },
      },
    },
    products: [
      {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        category: {
          type: String,
        },
        url: {
          type: String,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    total_value: {
      type: Number,
      required: true,
    },
    discount_percentage: {
      type: Number,
      required: true,
    },
    discoount_value: {
      type: Number,
      required: true,
    },
    final_value: {
      type: Number,
      required: true,
    },
    payment: {
      id: {
        type: String,
        required: true,
      },
      payment_type: {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
      ammount: {
        type: Number,
        required: true,
      },
      ammount_recived: {
        type: Number,
        required: true,
      },
      card_flag: {
        id: {
          type: Number,
        },
        flag: {
          type: String,
        },
        t_band: {
          type: String,
        },
      },
      date: {
        type: Date,
      },
      status: {
        type: String,
        required: true,
      },
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Sale', SaleSchema)
