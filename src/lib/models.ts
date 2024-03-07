import mongoose from "mongoose";

export interface Quote extends mongoose.Document {
  who: string;
  what: string;
}

const QuoteSchema = new mongoose.Schema<Quote>({
  who: {
    type: String,
    required: [true, "Quoter is required"],
    maxlength: [24, "Max lenght reached"],
  },
  what: {
    type: String,
    required: [true, "Quote is required"],
    maxlength: [24, "Max lenght reached"],
  },
});

export default mongoose.models.Quote || mongoose.model<Quote>("Pet", QuoteSchema);