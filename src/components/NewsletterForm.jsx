import { useState } from "react";
import { subscribeNewsletter } from "../api/client";

/**
 * Newsletter / news alert subscription form. Shows success or error message under the button.
 */
export default function NewsletterForm({
  inputClassName = "bg-white/10 border-none rounded-l-lg px-4 py-2 w-full text-white placeholder:text-slate-500 focus:ring-1 focus:ring-accent-gold focus:outline-none",
  buttonClassName = "bg-accent-gold text-primary font-bold px-4 py-2 rounded-r-lg hover:bg-accent-gold/90 transition-all",
  messageSuccessClass = "text-emerald-300 text-sm mt-2",
  messageErrorClass = "text-red-300 text-sm mt-2",
  buttonLabel = "Join",
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!value || !value.includes("@")) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }
    setMessage({ type: "", text: "" });
    setLoading(true);
    try {
      await subscribeNewsletter(value);
      setMessage({ type: "success", text: "Thank you! You're subscribed to our news alerts." });
      setEmail("");
    } catch (err) {
      setMessage({ type: "error", text: err.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClassName}
          disabled={loading}
          required
        />
        <button type="submit" disabled={loading} className={buttonClassName}>
          {loading ? "…" : buttonLabel}
        </button>
      </form>
      {message.text && (
        <p className={message.type === "success" ? messageSuccessClass : messageErrorClass} role="status">
          {message.text}
        </p>
      )}
    </div>
  );
}
