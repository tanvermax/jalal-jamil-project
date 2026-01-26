import { CheckCircle2, Package, Truck, ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router";
 // অথবা Next.js হলে 'next/link'

export default function OrderSuccessPage() {
  // প্র্যাকটিক্যাল প্রজেক্টে এই আইডিগুলো ডাইনামিক হবে
  const orderId = "JCS-78219"; 
  const deliveryDate = "We Will Message Soon";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* Success Header */}
        <div className="bg-orange-600 p-10 text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
          <p className="opacity-90">Your order has been confirmed and is being processed.</p>
        </div>

        {/* Order Details Body */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Order Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Package className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold">Order Number</p>
                  <p className="text-lg font-bold ">#{orderId}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold">Estimated Delivery</p>
                  <p className="text-lg font-bold ">{deliveryDate}</p>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
              <p className="text-sm text-orange-800 font-medium mb-1">Need help with your order?</p>
              <p className="text-xs text-orange-700 leading-relaxed">
                If you have any questions, please contact our support at 
                <span className="font-bold block mt-1">+880 1674-986600</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/ordertrack" className="flex-1">
              <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg active:scale-95">
                Track My Order
              </button>
            </Link>
            
            <Link to="/" className="flex-1">
              <button className="w-full flex items-center justify-center gap-2 bg-white  border-2 border-gray-200 py-3 px-6 rounded-xl font-semibold  transition-all active:scale-95">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </button>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <button className="text-orange-600 text-sm font-medium hover:underline inline-flex items-center gap-1">
              <Download className="h-4 w-4" />
              Download Invoice PDF
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="border-t border-gray-100 p-6 bg-gray-50 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            JCS Trading - Quality You Can Trust
          </p>
        </div>
      </div>
    </div>
  );
}