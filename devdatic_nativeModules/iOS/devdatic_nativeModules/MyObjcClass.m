//
//  MyObjcClass.m
//  devdatic_nativeModules
//
//  Created by shopify account on 2015-09-04.
//  Copyright © 2015 Facebook. All rights reserved.
//

#import "MyObjcClass.h"

@implementation MyObjcClass

RCT_EXPORT_MODULE()

- (NSDictionary *) constantsToExport
{
  return @{@"greeting": @"Welcome to learning about bridging Lohit!"};
}




RCT_EXPORT_METHOD(squareMe:(int) number: (RCTResponseSenderBlock) callback)
{
  callback(@[[NSNull null], [NSNumber numberWithInt:(number*number)]]);
}




@end


