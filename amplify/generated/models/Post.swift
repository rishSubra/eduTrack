// swiftlint:disable all
import Amplify
import Foundation

public struct Post: Model {
  public let id: String
  public var post_name: String
  public var post_url: String
  public var post_date: Temporal.Date
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      post_name: String,
      post_url: String,
      post_date: Temporal.Date) {
    self.init(id: id,
      post_name: post_name,
      post_url: post_url,
      post_date: post_date,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      post_name: String,
      post_url: String,
      post_date: Temporal.Date,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.post_name = post_name
      self.post_url = post_url
      self.post_date = post_date
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}