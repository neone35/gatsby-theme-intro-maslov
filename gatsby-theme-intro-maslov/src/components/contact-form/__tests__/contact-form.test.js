import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from '../contact-form'

describe('ContactForm', () => {
  const props = { email: 'test@example.com', budget: { default: 500, min: 10, max: 5000, currency: '€' } }

  test('renders and toggles inquiry panel', () => {
    render(<ContactForm {...props} />)

    // Inquiry checkbox label exists
    const inquiryLabel = screen.getByText(/Inquiry/i)
    expect(inquiryLabel).toBeInTheDocument()

    // Initially message textarea exists
    const message = screen.getByPlaceholderText(/MESSAGE/i)
    expect(message).toBeInTheDocument()

    // Click the hidden checkbox by clicking the label
    fireEvent.click(inquiryLabel)

    // After toggling, the budget display should be present
    const budgetDisplay = screen.getByText(/€ 500/)
    expect(budgetDisplay).toBeInTheDocument()
  })
})
