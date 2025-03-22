import { Banner } from "./ui/Banner"
import { Modal } from "./ui/Modal"

export const FAQ = () => {
  return (
    <div id="faq" className="w-full p-8">
      <Banner 
      title="Frequently asked questions"
      description="Everything you need to know about our AI portrait studio." />

      {
        faq.map((f, i) => (
          <Modal key={i}
            question={f.question}
            answer={f.answer}
          />
        ))
      }
    </div>
  )
}

const faq = [
  {
    question: "How does the AI portrait generation work?",
    answer: "Our AI technology analyzes your photos to create professional portraits that enhance your best features while maintaining natural authenticity. The process combines advanced machine learning with professional photography principles."
  }, {
    question: "How many photos do I receive?",
    answer: "Each session generates multiple professional portraits in different styles and poses. You'll receive a variety of options to choose from, typically 10-15 high-quality images."
  }, {
    question: "Can I customize the style of my portraits?",
    answer: "Yes! You can select from various professional styles, backgrounds, and lighting options to match your preferred aesthetic and professional needs."
  }, {
    question: "How long does it take to receive my portraits?",
    answer: "Your portraits are available in both JPEG and PNG formats, with options to download in different resolutions suitable for both web use and printing."
  }, {
    question: "What file formats are the portraits available in?",
    answer: "Your portraits are available in both JPEG and PNG formats, with options to download in different resolutions suitable for both web use and printing."
  }, {
    question: "Can I use these portraits for commercial purposes?",
    answer: "Yes, you receive full commercial usage rights for all generated portraits. They're perfect for professional profiles, marketing materials, and business use."
  }
]
