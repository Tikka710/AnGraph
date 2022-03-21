import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCommentInput } from "../inputs/UserCreateWithoutCommentInput";
import { UserUpdateWithoutCommentInput } from "../inputs/UserUpdateWithoutCommentInput";

@TypeGraphQL.InputType("UserUpsertWithoutCommentInput", {
  isAbstract: true
})
export class UserUpsertWithoutCommentInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCommentInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCommentInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCommentInput, {
    nullable: false
  })
  create!: UserCreateWithoutCommentInput;
}
