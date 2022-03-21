import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { User } from "../../../models/User";
import { UserCommentArgs } from "./args/UserCommentArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comment(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserCommentArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).comment(args);
  }
}
