# Kver.js

A lightweight TypeScript library for Aadhaar card verification using multiple KYC service providers.

## Features

- 🚀 Easy to use API
- 🔒 Type-safe
- 🔌 Adapter-based architecture
- ⚡ Promise-based async operations
- 📦 Multiple KYC provider support

## Installation

```bash
npm install @mohit4bug/kver-js
# or
yarn add @mohit4bug/kver-js
# or
pnpm add @mohit4bug/kver-js
```

## Quick Start

```typescript
import { Kver, SurepassAadhaarAdapter } from '@mohit4bug/kver-js'

// Initialize the adapter with your Surepass bearer token
const adapter = new SurepassAadhaarAdapter({ 
  bearerToken: 'YOUR_BEARER_TOKEN' 
})

// Create a new Kver instance
const kver = new Kver({ 
  adapter, 
  documentType: 'aadhaar' 
})

// Example usage
async function verifyAadhaar() {
  try {
    // Generate OTP
    const otpResponse = await kver.adapter.generateOtp({ 
      aadhaarNumber: '123456789012' 
    })
    console.log('OTP Generated, Client ID:', otpResponse.clientId)

    // Verify OTP
    const verificationResponse = await kver.adapter.verifyOtp({
      clientId: otpResponse.clientId,
      otp: '123456'
    })
    console.log('Verification successful:', verificationResponse.data)
  } catch (error) {
    console.error('Verification failed:', error)
  }
}
```

## Response Types

### OTP Generation Response
```typescript
interface IGenerateOtpResponse {
  clientId: string
  statusCode: number
}
```

### Verification Response
```typescript
interface IVerifyOtpResponse {
  data: {
    gender: string
    fullName: string
    careOf: string
    dob: string
    address: {
      house: string
      street: string
      vtc: string
      loc: string
    }
    zip: string
    profileImage: string
  }
}
```

## Available Adapters

### SurepassAadhaarAdapter

The SurepassAadhaarAdapter integrates with Surepass's Aadhaar verification API.

```typescript
const adapter = new SurepassAadhaarAdapter({ 
  bearerToken: 'YOUR_BEARER_TOKEN' 
})
```

## Error Handling

The library throws typed exceptions that you can catch and handle:

- `ServiceUnavailableException`: Thrown when the KYC service is unavailable
- Additional error types may be thrown based on the specific adapter being used

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Mohit Khatri ([mohit4bug](https://github.com/mohit4bug))

## Version

Current version: 1.6.0-beta.1